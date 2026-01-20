import React from "react";
import { Link } from "react-router-dom"; 

const MovieCard = React.memo(({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="movie-card" style={{ cursor: 'pointer' }}>
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={movie.title}
        />
        <h4>{movie.title}</h4>
      </div>
    </Link>
  );
});

export default MovieCard;