import { useEffect, useState } from "react";
import { fetchMovies } from "../APIs/movies";
import MovieCard from "../components/MovieCard";
import Loader from "../components/loader";
import "../App.css";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    loadMovies();
  }, [page]);

  async function loadMovies() {
    try {
      setLoading(true);
      const res = await fetchMovies(page);

      if (res?.results) {
        setMovies((prev) => {
          const existingIds = new Set(prev.map((m) => m.id));
          const uniqueNewMovies = res.results.filter((m) => !existingIds.has(m.id));
          return [...prev, ...uniqueNewMovies];
        });
      }
    } catch (err) {
      setError("Failed to load movies. Please check your connection.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="home-container">
      <h1 className="brand-title">CineStream</h1>

      {error && <p className="error-msg">{error}</p>}

      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      {loading && <Loader />}

      {!loading && movies.length > 0 && (
        <button className="load-more-btn" onClick={() => setPage((p) => p + 1)}>
          LOAD MORE
        </button>
      )}
    </div>
  );
}