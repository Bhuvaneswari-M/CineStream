import { createContext, useEffect, useState } from "react";
import api from "../APIs/axiosInstance"; 

export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    
    api.get("/movie/popular") 
      .then(res => setMovies(res.data.results))
      .catch(err => console.error("Context Fetch Error:", err));
  }, []);

  return (
    <MoviesContext.Provider value={{ movies }}>
      {children}
    </MoviesContext.Provider>
  );
};