// src/services/axiosConfig.ts

import axios from 'axios';

const axiosConfig = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosConfig.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

console.log("URL base de Axios:", axiosConfig.defaults.baseURL);

export default axiosConfig;
