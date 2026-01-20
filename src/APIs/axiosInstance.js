import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  timeout: 8000,
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2N2QzMDE5MTRhZGRiN2MyNjk4ZDkxMDI1YTA0NjFiNyIsIm5iZiI6MTc2ODg5MzkzNS4wOTMsInN1YiI6IjY5NmYyZGVmMWQ4NWRiYTRmNjdhYmEyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hR0H90MA12eUqXWUV00gEXeE_82JJkx6SxmEL0z1jSY`,
  },
});

export default api;
