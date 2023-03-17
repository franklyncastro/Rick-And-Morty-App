const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character";

//todo => Agregado async await
async function getCharById(req, res) {
  try{
    const { id } = req.params;
    const response = await axios(`${URL}/${id}`);
    const data = response.data
    const character = {
      id: data.id,
      image: data.image,
      name: data.name,
      gender: data.gender,
      species: data.species,
    }
    res.status(200).json(character);
  }
  catch(err){
    res.status(500).json({ err: err.message });
  }
}










module.exports = {
  getCharById,
};

//! proceso peticion api sin Async-Await 
// const getCharById = (req, res) => {
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
//       };
//       res.status(200).json(character);
//     })
//     .catch((err) => {
//       res.status(500).json({ err: err.message });
//     });
// };

//! Proceso sin el uso de Express
// const getCharById = (res, id) => {
//   axios(`${url}${id}`)
//     .then((res) => res.data)
//     .then((data) => {
//       const character = {
//         id: data.id,
//         image: data.image,
//         name: data.name,
//         gender: data.gender,
//         species: data.species,
//       };
//       res.writeHead(200, { "Content-type": "application/json" });
//       res.end(JSON.stringify(character));
//     })
//     .catch((err) => {
//       res.writeHead(500, { "Content-type": "text/plain" });
//       res.end(err.message);
//     });
// };
