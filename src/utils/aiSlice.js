import { createSlice } from "@reduxjs/toolkit";

const aiSlice = createSlice({
  name: "aiSearch",
  initialState: {
    showAISearch: false,
    movieNames: null,
    movieResults: null,
  },
  reducers: {
    toggleAISearch: (state, action) => {
      state.showAISearch = !state.showAISearch;
    },
    addAiResults: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const { toggleAISearch, addAiResults } = aiSlice.actions;
export default aiSlice.reducer;
