import MovieCard from "../components/MovieCard";
import Loader from "../components/Loader";

export default function Home({ movies, loading }) {

  console.log("Home page movies data:", movies);
  if (loading) return <Loader />;

  return (
    <div className="movie-grid">
      {Array.isArray(movies) && movies.length > 0 ? (

      
      movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))
    ): (
      <p>No movies found. Please try again later</p>
    )}
    </div>
  );
}
