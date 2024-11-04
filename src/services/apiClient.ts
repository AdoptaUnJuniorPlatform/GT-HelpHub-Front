import axiosConfig from './axiosConfig';
import { ProfileData, HabilityData } from '../types/RegistrationFormData';

// Función para crear el perfil
export const createProfile = async (profileData: ProfileData) => {
  try {
    console.log("Datos de perfil enviados:", profileData);
    const response = await axiosConfig.post('/helphub/profile', profileData);
    return response.data;
  } catch (error) {
    console.error('Error creating profile:', error);
    throw error;
  }
};

// Función para crear la habilidad
export const createHability = async (habilityData: HabilityData) => {
  try {
    const response = await axiosConfig.post('/helphub/hability', habilityData);
    return response.data;
  } catch (error) {
    console.error('Error creating hability:', error);
    throw error;
  }
};
