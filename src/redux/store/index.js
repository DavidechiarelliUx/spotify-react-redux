import { combineReducers, configureStore } from "@reduxjs/toolkit";
import songReducer from "../reducers/songReducers";
import currentSongReducer from "../reducers/currentSongReducers";
import searchReducer from "../reducers/searchReducers";


const rootReducer = combineReducers({
  songs:songReducer,
  currentSong:currentSongReducer ,
  search:searchReducer
});


const store = configureStore({
  reducer: rootReducer,
});

console.log( store.getState());

export default store;
