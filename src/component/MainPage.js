import React, { useState } from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import MovieSearchList from "./MovieSearchList";
import ToastMessage from "./ToastMessage";

const MainPage = () => {
  const toasts = useSelector((state) => state.toasts);
  const [movieNameInput, setMovieNameInput] = useState("");
  const [moviesSearch, setMoviesSearch] = useState([]);

  const searchForMovies = async (event) => {
    event.preventDefault();
    const response = await fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=3482aa97839ba50ed268dd3f53c710d3&query=" +
        movieNameInput
    );
    if (response.ok) {
      const JSONresults = await response.json();
      setMoviesSearch(JSONresults.results);
    }
  };

  return (
    <>
      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        {toasts.map((toast) => (
          <ToastMessage toast={toast} key={toast.id} />
        ))}
      </div>
      <MovieList />
      <br /> <br />
      <form onSubmit={searchForMovies}>
        <div className="mb-3">
          <label htmlFor="movieName" className="form-label">
            Search THEMOVIEDB.ORG for movies...
          </label>
          <br />
          <input
            type="text"
            className="form-control"
            id="movieName"
            value={movieNameInput}
            aria-describedby="movieNameHelp"
            onChange={(event) => {
              setMovieNameInput(event.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary m-1">
          Search Database
        </button>
        <button
          type="button"
          className="btn btn-info m-1"
          onClick={() => {
            setMoviesSearch([]);
            setMovieNameInput("");
          }}
        >
          Clear
        </button>
      </form>
      <MovieSearchList movies={moviesSearch} />
    </>
  );
};

export default MainPage;
