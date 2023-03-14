import { ADD_FAVORITE, DELETE_FAVORITE } from "./action-types";
import axios from 'axios'

export const addFavorite = (character) => {
  axios.post("http://localhost:3001/rickandmorty/fav", character)
  return {
    type: ADD_FAVORITE,
    payload: character,
  };
};

export const deleteFavorite = (id) => {
  axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`)
    return {
        type: DELETE_FAVORITE,
        payload: id
    }
}