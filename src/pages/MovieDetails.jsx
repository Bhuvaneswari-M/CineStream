import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieDetails } from "../APIs/movies";
import Loader from "../components/loader";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    loadMovie();
  }, [id]);

  async function loadMovie() {
    try {
      const res = await fetchMovieDetails(id);
      setMovie(res);
    } catch (err) {
      setError("Failed to load movie details");
    }
  }

  if (error) return <p>{error}</p>;
  if (!movie) return <Loader />;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{movie.title}</h1>

      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
        style={{ borderRadius: "12px" }}
      />

      <p><strong>Overview:</strong> {movie.overview}</p>
      <p><strong>Rating:</strong> ⭐ {movie.vote_average}</p>
      <p><strong>Release Date:</strong> {movie.release_date}</p>
    </div>
  );
}
