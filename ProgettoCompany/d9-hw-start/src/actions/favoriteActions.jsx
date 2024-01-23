export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_TO_FAVORITES = 'REMOVE_TO_FAVORITES';

export const addToFavorites = (company) => {
  return{
  type: ADD_TO_FAVORITES,
  payload: company
  }
};

export const removeFromFavorites = (company) => {
  return {
  type: REMOVE_TO_FAVORITES,
  payload: company
  }
};
// questa è l'azione che tramite il dispatch può aggiornare lo stato e mandarlo direttamente nello store