const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character";

const getCharByDetail = (res, id) => {
  axios(`${URL}/${id}`)
    .then((res) => res.data)
    .then((data) => {
      const character = {
        id: data.id,
        image: data.image,
        name: data.name,
        gender: data.gender,
        species: data.species,
        status: data.status,
        origin: data.origin,
      };
      res.status(200).json(character);
    })
    .catch((err) => {
      res.status(500).json({ err: err.message });
    });
};

module.exports = {
  getCharByDetail
};
