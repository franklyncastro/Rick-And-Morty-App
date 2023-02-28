import { ADD_FAVORITE, DELETE_FAVORITE } from "./action-types";

const initialState = {
  myFavorites: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload]
      };

    case DELETE_FAVORITE:
        return{
            ...state,
            myFavorites: state.myFavorites.filter((personaje)=> personaje.id !== action.payload)
        }
    default:
      return { ...state };
  }
};

export default reducer;
