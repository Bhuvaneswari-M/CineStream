import MovieCard from "../components/MovieCard";
import Loader from "../components/Loader";

export default function Home({ movies, loading }) {
  if (loading) return <Loader />;

  return (
    <div className="movie-grid">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
