const fs = require('fs');

const data = JSON.parse(fs.readFileSync("./public/feeds.json", "utf-8"))["data"];

export function getInitial() {
  return data.slice(0, 5);
}

export default (req, res) => {
  const msg = JSON.parse(req.body);
  if (msg["more"] != undefined) {
    res.statusCode = 200;
    res.json(data.slice(msg["more"]*5, (msg["more"]+1)*5));
  }
  else {
    res.statusCode = 408;
  }
  res.end();
}