import api from "./axiosInstance";

export const fetchMovieDetails =async (id) =>{
    try {
        const response= await api.get(`/movie/${id}`);
        return response.data;
    } catch(error){
        throw error;
    }
};
export const fetchMovies = async (page=1) =>{
    try {
        const response= await api.get(`/movie/popular?page=${page}`);
        return response.data;
    } catch(error){
        console.error("API Error Response:", error.response?.data);
        throw new Error(`Failed to fetch movies: ${error.message}`);
    }
};

export const searchMovies = async (query) => {
  try {
    const response = await api.get(`/search/movie?query=${encodeURIComponent(query)}`);
    return response.data.results;
  } catch (error) {
    throw new Error(`Search failed: ${error.message}`);
  }
};
