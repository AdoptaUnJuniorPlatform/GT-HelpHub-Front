// src/services/axiosConfig.ts

import axios from 'axios';
import { isTokenExpired } from '../utils/utils';

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
      if(isTokenExpired(token)) {
        localStorage.removeItem('token');
        alert('Tu sesión ha expirado. Por favor, inicia sesión nuevamente.');
        window.location.href = '/';
        return Promise.reject(new Error('Token expirado'));
      }
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