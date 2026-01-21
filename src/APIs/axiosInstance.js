import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  timeout: 8000,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    
  },
});

export default api;
