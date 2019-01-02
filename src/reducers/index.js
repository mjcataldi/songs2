import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Smells Like Teen Spirit", duration: "4:30" },
    { title: "All Star", duration: "4:35" },
    { title: "I Want It That Way", duration: "4:24" },
    { title: "Macarena", duration: "4:10" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  switch (action.type) {
    case "SONG_SELECTED":
      return action.payload;
    default:
      return selectedSong;
  }
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
