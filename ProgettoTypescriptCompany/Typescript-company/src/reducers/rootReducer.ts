import { combineReducers } from 'redux';
import favoritesReducer from './favoritesReducer';

// Definisci il tipo di stato radice
export interface RootState {
  favorites: ReturnType<typeof favoritesReducer>;
  // Altre chiavi dello stato, se presenti
}

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  // Combina tutti i reducers
});

export default rootReducer;