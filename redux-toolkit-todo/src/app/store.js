// import { configureStore } from '@reduxjs/toolkit';
// import todoReducer from  '../../src/features/todo/todoSlice'

// export const store = configureStore({
//   reducer: {
//     todos: todoReducer          // todos name will be shown inside Redux-DevTools
//   },
// })


// ----------------------------------------------------------------------redux-persist


import { configureStore } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist'
import {combineReducers} from '@reduxjs/toolkit'
import todoReducer from  '../../src/features/todo/todoSlice'


const persistConfig = {
  key: 'root',
  storage,
}
const allReducers = combineReducers({
  todos: todoReducer,
  // all other reduces from slices will be added here.
})

const persistedReducer =  persistReducer(persistConfig, allReducers);


export const store = configureStore({
  reducer: persistedReducer
})


/* 
    when we refresh page.. all our store value dissapper
    with the help of redux-persist we can maintain store state even after refresh page

    import storage from 'redux-persist/lib/storage';
    by default it store in local storage.. if need to store in session storage .. we have
    differen setup

 */