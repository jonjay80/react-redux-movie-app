import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: [
    {
      adult: false,
      backdrop_path: "/6bEbo8OLUQ8JsJxEqyHHF2uqmpa.jpg",
      genre_ids: [80, 18, 53, 28],
      id: 75780,
      original_language: "en",
      original_title: "Jack Reacher",
      overview:
        'When a gunman takes five lives with six shots, all evidence points to the suspect in custody. On interrogation, the suspect offers up a single note: "Get Jack Reacher!" So begins an extraordinary chase for the truth, pitting Jack Reacher against an unexpected enemy, with a skill for violence and a secret to keep.',
      popularity: 65.08,
      poster_path: "/uQBbjrLVsUibWxNDGA4Czzo8lwz.jpg",
      release_date: "2012-12-20",
      title: "Jack Reacher",
      video: false,
      vote_average: 6.6,
      vote_count: 6157,
      message: "added",
    },
    {
      adult: false,
      backdrop_path: "/xHRabofjmMGoIV3mb6xgy4nwOcS.jpg",
      genre_ids: [27],
      id: 801071,
      original_language: "en",
      original_title: "The Jack in the Box: Awakening",
      overview:
        "When a vintage Jack-in-the-box is opened by a dying woman, she enters into a deal with the demon within that would see her illness cured in return for helping it claim six innocent victims.",
      popularity: 151.102,
      poster_path: "/3Ib8vlWTrAKRrTWUrTrZPOMW4jp.jpg",
      release_date: "2022-02-24",
      title: "The Jack in the Box: Awakening",
      video: false,
      vote_average: 6.4,
      vote_count: 213,
      message: "added",
    },
    {
      adult: false,
      backdrop_path: "/ww1eIoywghjoMzRLRIcbJLuKnJH.jpg",
      genre_ids: [28, 53],
      id: 343611,
      original_language: "en",
      original_title: "Jack Reacher: Never Go Back",
      overview:
        "When Major Susan Turner is arrested for treason, ex-investigator Jack Reacher undertakes the challenging task to prove her innocence and ends up exposing a shocking conspiracy.",
      popularity: 54.081,
      poster_path: "/bvCEEs5l3ylNIgH4foqOmQk0qdi.jpg",
      release_date: "2016-10-19",
      title: "Jack Reacher: Never Go Back",
      video: false,
      vote_average: 5.9,
      vote_count: 4260,
      message: "added",
    },
    {
      adult: false,
      backdrop_path: "/c7U9Fuy74WLp7gFAdpQJHn2T2no.jpg",
      genre_ids: [14, 28, 12, 10751],
      id: 81005,
      original_language: "en",
      original_title: "Jack the Giant Slayer",
      overview:
        "The story of an ancient war that is reignited when a young farmhand unwittingly opens a gateway between our world and a fearsome race of giants. Unleashed on the Earth for the first time in centuries, the giants strive to reclaim the land they once lost, forcing the young man, Jack into the battle of his life to stop them. Fighting for a kingdom, its people, and the love of a brave princess, he comes face to face with the unstoppable warriors he thought only existed in legend–and gets the chance to become a legend himself.",
      popularity: 39.895,
      poster_path: "/xLbVsFpAlwf6khU3gG1yaRBPeC.jpg",
      release_date: "2013-02-27",
      title: "Jack the Giant Slayer",
      video: false,
      vote_average: 5.8,
      vote_count: 4496,
      message: "added",
    },
    {
      adult: false,
      backdrop_path: "/4IwoBJFfg24wNGD7A77XdSEXNLT.jpg",
      genre_ids: [12, 16, 10751],
      id: 13932,
      original_language: "en",
      original_title: "Jack-Jack Attack",
      overview:
        "The Parrs' baby Jack-Jack is thought to be normal, not having any super-powers like his parents or siblings. But when an outsider is hired to watch him, Jack-Jack shows his true potential.",
      popularity: 11.716,
      poster_path: "/30J7SeySVn7pm84x3vejZpenH5M.jpg",
      release_date: "2005-03-15",
      title: "Jack-Jack Attack",
      video: false,
      vote_average: 7.3,
      vote_count: 819,
      message: "added",
    },
    {
      adult: false,
      backdrop_path: "/moMs64IweGkJt1pwEAlsAFu3OFt.jpg",
      genre_ids: [35],
      id: 71880,
      original_language: "en",
      original_title: "Jack and Jill",
      overview:
        "Jack Sadelstein, a successful advertising executive in Los Angeles with a beautiful wife and kids, dreads one event each year: the Thanksgiving visit of his twin sister Jill. Jill's neediness and passive-aggressiveness is maddening to Jack, turning his normally tranquil life upside down.",
      popularity: 25.81,
      poster_path: "/kFeAxmZvu0TE4iuLRHQD6Cej8Wf.jpg",
      release_date: "2011-11-11",
      title: "Jack and Jill",
      video: false,
      vote_average: 4.3,
      vote_count: 1832,
      message: "added",
    },
  ],
  reducers: {
    addMovieToFavorites: (state, action) => {
      let alreadyInList = false;
      state.map((movie) => {
        if (movie.id === action.payload.id) {
          alreadyInList = true;
          return { ...movie, message: "duplicate" };
        }
        return movie;
      });
      if (!alreadyInList) {
        const newMovie = action.payload;
        state.push({ ...newMovie, message: "added" });
      }
    },
    removeMovieFromFavorites: (state, action) => {
      return state.filter((movie) => movie.id !== action.payload.id);
    },
    checkMovieExistsInList: (state, action) => {
      return state.filter((movie) => movie.id === action.payload.id);
    },
  },
  extraReducers: {},
});

export const { addMovieToFavorites, removeMovieFromFavorites, checkMovieExistsInList } =
  movieSlice.actions;

export default movieSlice.reducer;
