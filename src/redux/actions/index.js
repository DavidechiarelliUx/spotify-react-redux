export const SET_SEARCHED_SONGS = "SET_SEARCHED_SONGS";
export const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS";
export const SET_CURRENT_SONG = "SET_CURRENT_SONG";

export const setSearchedSongs = (songs) => ({
  type: SET_SEARCHED_SONGS,
  payload: songs,
});

export const setCurrentSong = (song) => ({
  type: SET_CURRENT_SONG,
  payload: song,
});




export const fetchSongsByArtist = (artist) => {
  return async (dispatch, getState) => {
    console.log(`artist: ${artist}`);

    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artist}`);
      if (response.ok) {
        let { data } = await response.json();
        console.log(data.slice(0, 4));
        dispatch(setSearchedSongs(data.slice(0, 4)));

        console.log("resp:", getState().songs.searchedSongs);
      } else {
        console.log("Errore nella fetch");
      }
    } catch (error) {
      console.log("Errore nella ricerca:", error);
    }
  };
};

