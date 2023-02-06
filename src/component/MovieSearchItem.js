import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovieToFavorites } from "../redux/movieSlice";
import { addToast } from "../redux/toastSlice";
import "./MovieSearchItem.css";

const MovieSearchItem = (movie) => {
  const [isHovered, setIsHovered] = useState(false);

  const dispatch = useDispatch();

  const handleAddMovieToFavorites = () => {
    dispatch(addMovieToFavorites({ ...el }));
    dispatch(addToast({ ...el }));
  };

  const el = movie.movie;
  const year = el.release_date ? el.release_date.slice(0, 4) : "";
  let fullImagePath = "";
  if (el.poster_path == null) {
    fullImagePath = "/images/themoviedb.png";
  } else {
    fullImagePath = "https://image.tmdb.org/t/p/w300" + el.poster_path;
  }

  return (
    <>
      <div
        className={`card movieSearchListItem ${isHovered && "add-box-shadow"}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={fullImagePath} className="card-img-top" alt={el.title} />
        <div className="card-body movieSearchListItem">
          <h3 className="card-title movieSearchListItem">{el.title}</h3>
          <h5 className="card-title movieSearchListItem">{year}</h5>
        </div>
        {isHovered && (
          <div className="addDropDown movieSearchListItem">
            <button
              className="btn btn-success m-2"
              onClick={handleAddMovieToFavorites}
            >
              Add Movie to Favorites
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default MovieSearchItem;
