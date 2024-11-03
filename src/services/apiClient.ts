import axiosConfig from './axiosConfig';
import { RegistrationFormData } from '../types/RegistrationFormData';

// Función para crear el perfil usando la configuración base de Axios
export const createProfile = async (profileData: Partial<RegistrationFormData>) => {
  try {
    const response = await axiosConfig.post('/helphub/profile', profileData);
    return response.data;
  } catch (error) {
    console.error('Error creating profile:', error);
    throw error;
  }
};