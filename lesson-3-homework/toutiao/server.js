const PORT = 4000;

const http = require('http');
const fs = require('fs');
const type = {
    "css": "text/css",
    "html": "text/html",
    "js": "text/javascript"
};
let data;
fs.readFile("./data.json", "utf-8", function(err, dt) {
    if (err) {
        console.log("ReadFile Error");
    }
    else {
        data = JSON.parse(dt);
    }
});

http.createServer(function (request, response) {
    let path = "." + request.url;
    if(request.url == "/"){
        path += "toutiao.html";
    }
    let ext = path.split('.').pop();

    if (path == "./data.json") {
        let msg = "";				  
        request.on("data", m => {
            msg += m;
        });

        request.on('end', () => {
            msg = JSON.parse(msg);
            if (msg["more"] != undefined && msg["more"] <= 10) {
                if (data && msg["more"] <= 10) {
                    response.writeHead(200, {
                        'Content-Type': 'application/json'
                    });

                    response.write(JSON.stringify(data["data"][msg["more"]]));
                    response.end();
                }
            }
        });
    }
    else {
        fs.readFile(path, "binary", function(err, file) {
            if (err) {
                response.writeHead(404, "Not Found");
                response.end("<h1>404 Not Found!</h1>");
            }
            else {
                let contentType;
                if (type[ext]) {
                    contentType = type[ext];
                }
                else {
                    contentType = "text/plain";
                }
                response.writeHead(200, {
                    'Content-Type': contentType
                });
                response.write(file, "binary");
                response.end();
            }
        });
    }

}).listen(PORT);

console.log("Server running at port: " + PORT + ".");