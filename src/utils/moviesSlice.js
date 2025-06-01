import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    trendingMovies: null,
    popularMovies: null,
    nowPlayingSeries: null,
    trailerVideoSeries: null,
    trendingSeries: null,
    popularSeries: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addNowPlayingSeries: (state, action) => {
      state.nowPlayingSeries = action.payload;
    },
    addTrailerVideoSeries: (state, action) => {
      state.trailerVideoSeries = action.payload;
    },
    addTrendingSeries: (state, action) => {
      state.trendingSeries = action.payload;
    },
    addPopularSeries: (state, action) => {
      state.popularSeries = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addTrendingMovies,
  addPopularMovies,
  addNowPlayingSeries,
  addTrailerVideoSeries,
  addTrendingSeries,
  addPopularSeries,
} = moviesSlice.actions;
export default moviesSlice.reducer;
