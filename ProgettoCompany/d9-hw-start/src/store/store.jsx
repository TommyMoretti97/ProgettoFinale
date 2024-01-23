 
import { createStore } from 'redux' // ora si usa import {configureStore } from reduxjs/toolkit 

import rootReducer from '../reducers/rootReducer';

const store = createStore(rootReducer);

export default store;

// NUOVA SINTASSI:
// import { configureStore } from '@reduxjs/toolkit'
// export const store = configureStore({
//    reducer: {},
// })
// per fare questo devi installare npm install @reduxjs/toolkit