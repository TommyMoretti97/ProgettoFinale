import { ADD_TO_FAVORITES, REMOVE_TO_FAVORITES, FavoritesActionTypes } from '../actions/favoriteActions';

interface FavoritesState {
  favoriteCompanies: string[]; // Aggiungi altri tipi se necessario
}

const initialState: FavoritesState = {
  favoriteCompanies: [],
};

const favoritesReducer = (state: FavoritesState = initialState, action: FavoritesActionTypes): FavoritesState => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favoriteCompanies: [...state.favoriteCompanies, action.payload],
      };
    case REMOVE_TO_FAVORITES:
      return {
        ...state,
        favoriteCompanies: state.favoriteCompanies.filter((company) => company !== action.payload),
      };
    default:
      return state;
  }
};

export default favoritesReducer;