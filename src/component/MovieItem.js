import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeMovieFromFavorites } from "../redux/movieSlice"
import { addToast } from "../redux/toastSlice";
import "./MovieItem.css";

const MovieItem = (movie) => {
  const [isHovered, setIsHovered] = useState(false);

  const dispatch = useDispatch();

  const handleRemoveMovieFromFavorites = () => {
    dispatch(removeMovieFromFavorites({id: el.id}));
    dispatch(addToast({...el, message: "deleted"}));
  };

  const el = movie.movie;
  const year = el.release_date ? el.release_date.slice(0, 4) : "";
  const fullImagePath = "https://image.tmdb.org/t/p/w500" + el.poster_path;

  return (
    <div
      className={`card movieListItem ${isHovered && "add-box-shadow"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={fullImagePath} className="card-img-top" alt={el.title} />
      <div className="card-body movieListItem">
        <h4 className="card-title movieListItem">{el.title}</h4>
        <h5 className="card-title movieListItem">{year}</h5>
      </div>
      {isHovered && (
        <div className="addDropDown movieListItem">
          <button
            className="btn btn-success m-2"
            onClick={handleRemoveMovieFromFavorites}
          >
            Delete Movie from Favorites
          </button>
        </div>
      )}
    </div>
  );
};

export default MovieItem;
