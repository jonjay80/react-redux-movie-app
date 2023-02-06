import { createSlice } from "@reduxjs/toolkit";

const toastSlice = createSlice({
  name: "toasts",
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
    },
  ],
  reducers: {
    addToast: (state, action) => {
      state.push(action.payload);
    },
    removeToast: (state, action) => {
      return state.filter(
        (toast) => toast.id !== action.payload.id
      );
    },
  },
  extraReducers: {},
});

export const { addToast, removeToast } = toastSlice.actions;

export default toastSlice.reducer;
