// SearchBar.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/searchbar.css";

export default function SearchBar({ movies = [] }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const filteredMovies =
    query.length > 0
      ? movies.filter(movie =>
          movie.title.toLowerCase().includes(query.toLowerCase())
        )
      : [];

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />

      {filteredMovies.length > 0 && (
        <ul className="search-dropdown">
          {filteredMovies.slice(0, 6).map(movie => (
            <li
              key={movie.id}
              onClick={() => {
                navigate(`/movie/${movie.id}`);
                setQuery("");
              }}
            >
              {movie.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
