import { ADD_FAVORITE, DELETE_FAVORITE } from "./action-types";
import axios from "axios";

export const addFavorite = (character) => {
  try {
    return async function (dispach) {
      const response = await axios.post(
        "http://localhost:3001/rickandmorty/fav",
        character
      );
      const data = response.data;

      console.log(data);

      return dispach({
        type: ADD_FAVORITE,
        payload: character,
      });
    };
  } catch (error) {
    console.log(error);
  }
};

export const deleteFavorite = (id) => {
  try {
    return async function (dispach) {
      const response = await axios.delete(
        `http://localhost:3001/rickandmorty/fav/${id}`
      );
      const data = response.data;
      console.log(data);
      return dispach({
        type: DELETE_FAVORITE,
        payload: id,
      });
    };
  } catch (error) {
    console.log(error.message);
  }
};




//! =+> Dispach para agregar favorito sin async-await
// axios.post("http://localhost:3001/rickandmorty/fav", character)
// return {
//   type: ADD_FAVORITE,
//   payload: character,
// };



//! =+> Dispach para eliminar favorito sin async-await
// axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`);
// return {
//   type: DELETE_FAVORITE,
//   payload: id,
// };