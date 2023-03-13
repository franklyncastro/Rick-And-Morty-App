const express = require("express");
const app = express();
const PORT = 3001;
const morgan = require('morgan')
const cors = require("cors");
// const router = require("./routes");


app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
// app.use('/rickandmorty', router)

//? Nuevo servidor creado con express

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});






















//!Servidor creado con http
// const server = http
//   .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     let id = req.url.split("/").at(-1);

//     if (req.url.includes("onSearch")) {
//       getCharById(res, id);
//     }

//     if (req.url.includes('detail')) {
//       getCharByDetail(res, id);
//     }
//   })
//   .listen(PORT, "localhost");
