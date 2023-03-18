import { ADD_FAVORITE, DELETE_FAVORITE } from "./action-types";

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
        allCharacters: state.allCharacters,
      };

    case DELETE_FAVORITE:
      const removeFav = state.myFavorites.filter(
        (char) => char.id !== action.payload
      );
      
      return {
        ...state,
        myFavorites: removeFav,
        allCharacters: state.allCharacters,
      };
    default:
      return { ...state };
  }
};

export default reducer;
