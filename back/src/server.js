const http = require("http");
const { getCharById } = require("./controllers/getCharById");
const { getCharByDetail } = require("./controllers/getCharDetail");
const PORT = 3001;
// const { characters } = require("./data");

const server = http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    let id = req.url.split("/").at(-1);

    if (req.url.includes("onSearch")) {
      getCharById(res, id);
    }

    if (req.url.includes('detail')) {
      getCharByDetail(res, id);
    }
  })
  .listen(PORT, "localhost");
