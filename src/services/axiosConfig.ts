// src/services/axiosConfig.ts

import axios from 'axios';

const axiosConfig = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL || 'http://127.0.0.1:4002/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosConfig;
