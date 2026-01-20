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
        throw new error(`Failed to fetch movies: ${error.message}`);
    }
};