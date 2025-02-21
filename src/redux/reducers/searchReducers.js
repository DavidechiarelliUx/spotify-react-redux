import { SET_SEARCH_RESULTS } from "../actions";

const initialState = {
  searchResults: [],
};

const searchReducer = (state = initialState, action) => {
  console.log(action.type);

  switch (action.type) {
    case SET_SEARCH_RESULTS:
      console.log("canzoni cercate:", action.payload);
      return { ...state, searchResults: action.payload };

    default:
      return state;
  }
};

export default searchReducer;
