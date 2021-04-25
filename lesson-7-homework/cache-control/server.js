const http = require("http");
const fs = require("fs");
const crypto = require("crypto");

const port = 3000;
const hash = crypto.createHash('md5').update("img").digest('hex');

http.createServer((req, res) => {
  let url = req.url.replace(/^\//, '');
  if (!url) {
    url = "index.html";
  }
  let parm = url.split('?');
  if (!fs.existsSync(parm[0])) {
    res.statusCode = 404;
    res.end();
    return;
  }
  else {
    switch (parm[1]) {
      case "max-age": res.writeHead(200, "OK", {"Cache-Control":"max-age=999"}); break;
      case "no-cache": 
        if (req.headers['if-none-match'] == hash) {
          res.statusCode = 304;
          res.end();
          return;
        }
        else {
          res.writeHead(200, "OK", {"Cache-Control":"no-cache", "ETag":hash});
        }
        break;
      case "no-store": res.writeHead(200, "OK", {"Cache-Control":"no-store"}); break;
    }
    fs.createReadStream(parm[0]).pipe(res);
  }
}).listen(port, () => {
  console.log("listening port " + port);
})