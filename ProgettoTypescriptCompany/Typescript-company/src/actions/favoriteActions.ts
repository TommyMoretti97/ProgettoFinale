// actions/favoriteActions.ts

export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_TO_FAVORITES = 'REMOVE_TO_FAVORITES';

export interface AddToFavoritesAction {
  type: typeof ADD_TO_FAVORITES;
  payload: string;
}

export interface RemoveFromFavoritesAction {
  type: typeof REMOVE_TO_FAVORITES;
  payload: string;
}

export type FavoritesActionTypes = AddToFavoritesAction | RemoveFromFavoritesAction;

export const addToFavorites = (company: string): AddToFavoritesAction => ({
  type: ADD_TO_FAVORITES,
  payload: company,
});

export const removeFromFavorites = (company: string): RemoveFromFavoritesAction => ({
  type: REMOVE_TO_FAVORITES,
  payload: company,
});
