import { ADD_TO_FAVORITES } from "../actions/favoriteActions";
import { REMOVE_TO_FAVORITES } from "../actions/favoriteActions";

const initialState = {
  favoriteCompanies: [], // inizializzo lo stato come array vuoto
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favoriteCompanies: [...state.favoriteCompanies, action.payload],
      };
    case REMOVE_TO_FAVORITES:
      return {
        ...state,
        favoriteCompanies: state.favoriteCompanies.filter((company) => company !== action.payload)
      };
      default:
        return state;
  }

};
//Quando arriva un'azione di tipo ADD_TO_FAVORITES, il reducer restituisce un nuovo stato in cui il valore di favoritesCompany è aggiornato con il valore presente nell'azione

export default favoritesReducer;