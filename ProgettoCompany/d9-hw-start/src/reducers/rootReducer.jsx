import { combineReducers } from 'redux';
import favoritesReducer from './favoritesReducer';

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  // Combina tutti i reducers, in questo caso non servirebbe perche ne abbiamo solo uno, ma lo lascio per ricordarmi la sintassi
});

export default rootReducer;