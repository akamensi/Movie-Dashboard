
import axios from 'axios';

const API_URL = 'http://localhost:6000/api/movie';

// Create a new movie
const createMovie = async (movieData, token) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  };
  const response = await axios.post(`${API_URL}`, movieData, config);
  return response.data;
};

// Get all movies
const getAllMovies = async () => {
  const response = await axios.get(`${API_URL}`);
  return response.data;
};

// Get a single movie by ID
const getMovieById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

// Update a movie
const updateMovie = async (id, updatedData, token) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  };
  const response = await axios.patch(`${API_URL}/${id}`, updatedData, config);
  return response.data;
};

// Delete a movie
const deleteMovie = async (id, token) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  };
  const response = await axios.delete(`${API_URL}/${id}`, config);
  return response.data;
};

// Export all service functions
const movieService = {
  createMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
  deleteMovie,
};

export default movieService;
