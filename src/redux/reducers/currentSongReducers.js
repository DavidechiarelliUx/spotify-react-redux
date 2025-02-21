import { SET_CURRENT_SONG } from "../actions";

const initialState = {
  currentSong: null,
};

const currentSongReducer = (state = initialState, action) => {
  console.log( action.type);

  switch (action.type) {
    case SET_CURRENT_SONG:
      console.log("Canzone selezionata:", action.payload);
      return {
         ...state, 
         currentSong: action.payload 
        };

    default:
      return state;
  }
};

export default currentSongReducer;
