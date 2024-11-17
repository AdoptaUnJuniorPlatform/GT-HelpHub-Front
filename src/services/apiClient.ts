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

//Función para obtener el UserId
export const fetchUserIdByEmail = async (email: string): Promise<string | null> => {
  try {
    const response = await axios.get(`/api/helphub/user/${email}`);
    const user = response.data[0]; // Accede al primer elemento del array
    return user ? user._id : null; // Devuelve el _id si existe 
  } catch (error) {
    console.error("Error fetching user ID:", error);
    return null;
  }
};

// Función para subir la imagen de perfil
export const uploadProfileImage = async (file: File, userId: string): Promise<{ imageUrl: string }> => {
  const formData = new FormData();
  const token = localStorage.getItem('token');
  formData.append('image_profile', file);
  formData.append('id_user', userId); 

  try {
    const response = await axios.post('/api/helphub/upload-service/upload-profileImage', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.data; 
  } catch (error) {
    console.error("Error uploading profile image:", error);
    throw error;
  }
};

//Función para obtener el ImageId
export const fetchImageId = async (imageId: string): Promise<string | null> => {
  try {
    const response = await axios.get(`/api/helphub/upload-service/profile-image/${imageId}`);
    const image = response.data[0]; // Accede al primer elemento del array
    return image ? image._id : null; // Devuelve el _id si existe 
  } catch (error) {
    console.error("Error fetching image ID:", error);
    return null;
  }
};


