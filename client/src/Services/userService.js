// I build this file to show that I can work without redux 
import axios from 'axios';

const API_URL = 'http://localhost:6000/api/user'; 

// User Sign Up
const signUp = async (userData) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    }
  };
  const response = await axios.post(`${API_URL}/signup`, userData, config);
  return response.data;
};

// User Sign In
const signIn = async (credentials) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    }
  };
  const response = await axios.post(`${API_URL}/signin`, credentials, config);
  return response.data;
};

// Get All Users (Admin)
const getAllUsers = async (token) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  };
  const response = await axios.get(`${API_URL}`, config);
  return response.data;
};

// Get a Single User by ID
const getUserById = async (id, token) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  };
  const response = await axios.get(`${API_URL}/${id}`, config);
  return response.data;
};

// Export all service functions
const userService = {
  signUp,
  signIn,
  getAllUsers,
  getUserById,
};

export default userService;
