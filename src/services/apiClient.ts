import axios from 'axios';
import axiosConfig from './axiosConfig';
import { ProfileData, HabilityData } from '../types/AuthServiceTypes';

// Función para crear el perfil
export const createProfile = async (profileData: ProfileData) => {
  try {
    const response = await axiosConfig.post('/api/helphub/profile', profileData);
    return response;
  } catch (error) {
    console.error('Error creating profile:', error);
    if (axios.isAxiosError(error)) {
      console.error('Detalles del error (Axios):', error.response?.data);
    }
    throw error;
  }
};

// Función para crear la habilidad
export const createHability = async (habilityData: HabilityData) => {
  try {
    const response = await axiosConfig.post('/api/helphub/hability', habilityData);
    console.log("Datos enviados a createHability:", habilityData);
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

// Función para obtener el UserId directamente del endpoint
export const fetchUserIdByEmail = async (email: string): Promise<string | null> => {
  try {
    const response = await axios.get(`/api/helphub/user/${email}`);
    const user = response.data[0]; 
    return user ? user._id : null; 
  } catch (error) {
    console.error("Error fetching user ID:", error);
    return null; 
  }
};

// Función para subir la imagen de perfil
export const uploadProfileImage = async (file: File, userId: string): Promise<void> => {
  const formData = new FormData();
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("No se encontró un token válido. No se puede subir la imagen.");
  }

  formData.append("image_profile", file);
  formData.append("id_user", userId);

  try {
    const response = await axios.post('/api/helphub/upload-service/upload-profileImage', formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });

    if (response.status === 201) {
      console.info("Imagen de perfil subida con éxito.");
    } else {
      throw new Error(`Error inesperado al subir la imagen. Código de estado: ${response.status}`);
    }
  } catch (error) {
    console.error("Error al subir la imagen de perfil:", error);
    throw new Error("No se pudo subir la imagen de perfil. Intenta de nuevo.");
  }
};

// Función para obtener el ImageId por UserId
export const fetchImageByUserId = async (id_user: string): Promise<string | null> => {
  try {
    const response = await axios.get(`/api/helphub/upload-service/profile-imageByUser/${id_user}`);
    const image = response.data[0]; 

    return image ? image.id_user : null;
  } catch (error) {
    console.error("Error fetching image ID:", error);
    return null; 
  }
};

//Función para mostrar la imagen del usuario(con o sin perfil)
export const fetchProfileImage = async (userId: string): Promise<string | null> => {
  const token = localStorage.getItem("token");
  
  try {
    const response = await axios.get(`/api/helphub/upload-service/profile-imageByUser/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      responseType: "blob", 
    });

    // Crear una URL temporal a partir del Blob
    const imageUrl = URL.createObjectURL(response.data);
    return imageUrl;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        return null; 
      }
    }

    console.error("Error obteniendo la imagen de perfil:", error);
    throw error;
  }
};