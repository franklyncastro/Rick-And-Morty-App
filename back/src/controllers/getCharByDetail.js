const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character";

//todo => Agregado async await
async function getCharByDetail(req, res) {
  try {
    const { id } = req.params;
    const response = await axios(`${URL}/${id}`);
    const data = response.data;
    const character = {
      id: data.id,
      image: data.image,
      name: data.name,
      gender: data.gender,
      species: data.species,
    };
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getCharByDetail,
};





//! Proceso sin Async-Await
// const getCharByDetail = (req, res) => {
//   const { id } = req.params;
//   axios(`${URL}/${id}`)
//     .then((res) => res.data)
//     .then((data) => {
//       const character = {
//         id: data.id,
//         image: data.image,
//         name: data.name,
//         gender: data.gender,
//         species: data.species,
//         status: data.status,
//         origin: data.origin,
//       };
//       res.status(200).json(character);
//     })
//     .catch((error) => {
//       res.status(500).json({ error: error.message });
//     });
// };
