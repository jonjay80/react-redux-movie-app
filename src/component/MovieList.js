import MovieItem from "./MovieItem";
import { useSelector } from "react-redux";

const MovieList = () => {
  const movies = useSelector((state) => state.movies);

  return (
    <div className="container-fluid">
        <h2>Your Favorite Movie List</h2>
      {movies.map((movie) => (
        <MovieItem movie={movie} key={movie.id}/>
      ))}
    </div>
  );
};

export default MovieList;
