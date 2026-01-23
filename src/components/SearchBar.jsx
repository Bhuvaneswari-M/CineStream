import { useNavigate } from "react-router-dom";
import "../style/searchbar.css";

export default function SearchBar({ searchTerm, setSearchTerm, movies = [] }) {
  const navigate = useNavigate();

  const suggestions = searchTerm.trim().length > 0 
    ? movies.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      ).slice(0, 5) 
    : [];

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {suggestions.length > 0 && (
        <ul className="search-dropdown">
          {suggestions.map((movie) => (
            <li 
              key={movie.id} 
              onClick={() => {
                navigate(`/movie/${movie.id}`);
                setSearchTerm(""); 
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