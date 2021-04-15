const fs = require('fs');

let data;
fs.readFile("./public/data.json", "utf-8", function(err, dt) {
  if (err) {
    console.log(err);
  }
  else {
    data = JSON.parse(dt);
  }
});

export default (req, res) => {
  const msg = JSON.parse(req.body);
  if (data && msg["more"] != undefined && msg["more"] < data["data"].length) {
    res.statusCode = 200;
    res.json(data["data"][msg["more"]]);
  }
  else {
    res.statusCode = 408;
  }
  res.end();
}
