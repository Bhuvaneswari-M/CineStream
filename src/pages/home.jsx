import { useEffect, useState } from "react";
import { fetchMovies } from "../APIs/movies";
import MovieCard from "../components/MovieCard";
import Loader from "../components/loader";

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
    setError("Failed to load movies");
  } finally {
    setLoading(false);
  }
}

  return (
    <>
      <h1>CineStream</h1>

      {error && <p>{error}</p>}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 20 }}>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      {loading && <Loader />}

      <button onClick={() => setPage(p => p + 1)}>
        Load More
      </button>
    </>
  );
}
