const fs = require('fs');

const data = JSON.parse(fs.readFileSync("./public/data.json", "utf-8"));

export default function getData(id) {
  return data[id];
}