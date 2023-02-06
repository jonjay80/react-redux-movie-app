import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";
import toastReducer from "./toastSlice";

export default configureStore({
  reducer: {
    movies: movieReducer,
    toasts: toastReducer,
  },
});
