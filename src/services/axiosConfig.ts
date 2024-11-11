// src/services/axiosConfig.ts

import axios from 'axios';

const axiosConfig = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL || 'http://127.0.0.1:4002/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor de solicitud: añade el token en el encabezado si existe
axiosConfig.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; 
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor de respuesta: guarda el token si viene en la respuesta
axiosConfig.interceptors.response.use(
  (response) => {
    if (response.data.token) {
      localStorage.setItem('token', response.data.token); 
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosConfig;