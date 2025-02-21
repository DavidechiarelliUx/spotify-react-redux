import { SET_SEARCHED_SONGS } from "../actions";

const initialState = {
  searchedSongs: [],
};

const songReducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case SET_SEARCHED_SONGS:
      console.log( action.payload);
      return {
         ...state, 
         searchedSongs: action.payload 
        };
    default:
      return state;
  }
};

export default songReducer;
