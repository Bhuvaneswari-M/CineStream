import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/navbar";
import SearchBar from "./components/SearchBar";
import { fetchMovies } from "./APIs/movies";
import "./App.css";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMovies();
  }, []);

  async function loadMovies() {
    try {
      const data = await fetchMovies();
      setMovies(data);
    } catch (err) {
      console.error("Failed to load movies");
    } finally {
      setLoading(false);
    }
  }

  return (
    <BrowserRouter>
      <Navbar>
        <SearchBar movies={movies} loading={loading} />
      </Navbar>

      <main className="content-area">
        <AppRoutes movies={movies} loading={loading} />
      </main>
    </BrowserRouter>
  );
}
