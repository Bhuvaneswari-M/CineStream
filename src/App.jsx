// App.jsx
import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/navbar";
import { fetchMovies, searchMovies } from "./APIs/movies";
import "./App.css";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(""); 

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      loadMovies();
    }, 500); 

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  async function loadMovies() {
  console.log("Searching for:", searchTerm); 
  try {
    setLoading(true);
    let data;
    if (searchTerm.trim()) {
      data = await searchMovies(searchTerm); 
    } else {
      data = await fetchMovies(); 
    }
    setMovies(data.results || []);
  } catch (err) {
    console.error("API failed:", err);
  } finally {
    setLoading(false);
  }
}

  return (
    <BrowserRouter>
      <Navbar 
      searchTerm={searchTerm} 
      setSearchTerm={setSearchTerm} 
      movies={movies}/>
      
      <main className="content-area">
        <AppRoutes movies={movies} loading={loading} />
      </main>
    </BrowserRouter>
  );
}