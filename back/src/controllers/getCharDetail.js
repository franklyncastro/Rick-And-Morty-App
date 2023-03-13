const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharByDetail = (res, id) => {
  axios(`${URL}/${id}`)
    .then((res) => res.data)
    .then((data) => {
      const character = {
        image: data.image,
        name: data.name,
        gender: data.gender,
        species: data.species,
        origin: data.origin,
      };
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(JSON.stringify(character));
    })
    .catch((err) => {
      res.writeHead(500, { "Content-type": "text/plain" });
      res.end(err.message);
    });
};

module.exports = {
  getCharByDetail,
};
