import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./action-types";
import axios from "axios";

export const addFavorite = (character) => {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        "http://localhost:3001/rickandmorty/fav",
        character
      );
      const data = response.data;

      console.log(data);

      dispatch({
        type: ADD_FAVORITE,
        payload: character,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteFavorite = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.delete(
        `http://localhost:3001/rickandmorty/fav/${id}`
      );
      const data = response.data;
      console.log(data);
      dispatch({
        type: DELETE_FAVORITE,
        payload: id,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};


export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};



export const orderCards = (id) => {
  return { type: ORDER, payload: id };
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
