import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./action-types";

const initialState = {
  allCharacters: [],
  myFavorites: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
      };

    case DELETE_FAVORITE:
      const removeFav = state.myFavorites.filter(
        (char) => char.id !== action.payload
      );
      
      return {
        ...state,
        myFavorites: removeFav,
      };

    case FILTER: 
      const myFavoritesFilter = state.myFavorites.filter((char)=> char.gender === action.payload);
      return{
        ...state,
        myFavorites: myFavoritesFilter
      };

    case ORDER: 
      return {
        ...state,
        myFavorites: action.payload === 'Ascendente'
          ? state.myFavorites.sort((a,b)=> a.id - b.id)
          : state.myFavorites.sort((a,b)=> b.id - a.id)
      };

    default:
      return { ...state };
  }
};

export default reducer;
