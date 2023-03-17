import { ADD_FAVORITE, DELETE_FAVORITE } from "./action-types";
import axios from "axios";

export async function addFavorite(character) {
  try {
    await axios.post("http://localhost:3001/rickandmorty/fav", character);
    return {
      type: ADD_FAVORITE,
      payload: character,
    };
  } catch (error) {
    console.log(error);
  }
}

export async function deleteFavorite(id) {
  try {
    await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`);
    return {
      type: DELETE_FAVORITE,
      payload: id,
    };
  } catch (error) {
    console.log(error);
  }
}
