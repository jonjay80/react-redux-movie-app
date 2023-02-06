import MovieSearchItem from "./MovieSearchItem";

const MovieSearchList = (movies) => {

  return (
    <div className="container-fluid">
      {movies.movies.map((movie) => (
        <MovieSearchItem movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default MovieSearchList;
