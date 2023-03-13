const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

//? Controlador para usar con express

const getCharByDetail = (req, res) => {
  const id = req.params;
  axios(`${URL}${id}`)
    .then((res) => res.data)
    .then((data) => {
      const character = {
        id: data.id,
        image: data.image,
        name: data.name,
        gender: data.gender,
        species: data.species,
        origin: data.origin,
      };
      res.status(200).json(character);
    })
    .catch((err) => {
      res.status(500).json({ err: err.message });
    });
};

module.exports = {
  getCharByDetail,
};

//! Controlador creado para usar en http
// const getCharByDetail = (res, id) => {
//   axios(`${URL}/${id}`)
//     .then((res) => res.data)
//     .then((data) => {
//       const character = {
//         image: data.image,
//         name: data.name,
//         gender: data.gender,
//         species: data.species,
//         origin: data.origin,
//       };
//       res.writeHead(200, { "Content-type": "application/json" });
//       res.end(JSON.stringify(character));
//     })
//     .catch((err) => {
//       res.writeHead(500, { "Content-type": "text/plain" });
//       res.end(err.message);
//     });
// };
