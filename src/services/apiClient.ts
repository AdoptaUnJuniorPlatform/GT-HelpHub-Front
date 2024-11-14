import axios from 'axios';
import axiosConfig from './axiosConfig';
import { ProfileData, HabilityData } from '../types/RegistrationFormData';

// Función para crear el perfil
export const createProfile = async (profileData: ProfileData) => {
  try {
    const response = await axiosConfig.post('/api/helphub/profile', profileData);
    return response;
  } catch (error) {
    console.error('Error creating profile:', error);
    throw error;
  }
};

// Función para crear la habilidad
export const createHability = async (habilityData: HabilityData) => {
  try {
    const response = await axiosConfig.post('/api/helphub/hability', habilityData);
    return response;
  } catch (error) {
    console.error('Error creating hability:', error);
    throw error;
  }
}

// Función para obtener los datos del perfil de usuario utilizando el token
export const fetchUserProfile = async (token: string): Promise<ProfileData | null> => {
  try {
    const response = await axios.get('/api/helphub/profile', {
      headers: {
        Authorization: `Bearer ${token}`, 
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return null;
  }
};
