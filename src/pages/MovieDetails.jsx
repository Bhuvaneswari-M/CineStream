import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieDetails } from "../APIs/movies";
import Loader from "./components/loader";


export default function MovieDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadMovie() {
      setLoading(true);
      setError("");

      try {
        const data = await fetchMovieDetails(id);
        if (isMounted) setMovie(data);
      } catch (err) {
        setError("Failed to load movie details. Please try again.");
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadMovie();

    return () => {
      isMounted = false; // prevents memory leaks
    };
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <p className="error">{error}</p>;

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : "/no-poster.png";

  return (
    <div className="movie-details">
      <img src={posterUrl} alt={movie.title} className="movie-poster" />

      <div className="movie-info">
        <h1>{movie.title}</h1>

        <p><strong>Overview:</strong> {movie.overview}</p>
        <p><strong>Rating:</strong> ⭐ {movie.vote_average}</p>
        <p><strong>Release Date:</strong> {movie.release_date}</p>
      </div>
    </div>
  );
}
