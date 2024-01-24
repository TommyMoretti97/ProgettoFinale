import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/rootReducer';

const store = configureStore({
  reducer: rootReducer,
  // Altri opzioni di configurazione, se necessario
});

export default store;