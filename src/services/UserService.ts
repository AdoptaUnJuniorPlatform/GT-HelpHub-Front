import axios from "axios";
import { UserByIdErrorResponse, UserByIdResponse } from "../types/UserServiceTypes";
import { getUserIdFromToken } from "../utils/utils";
import axiosConfig from "./axiosConfig";

export const userById = async (): Promise<UserByIdResponse | UserByIdErrorResponse> => {
  const id = getUserIdFromToken();
  
  try {
    const response = await axiosConfig.get(
      `/api/helphub/user/user-id/${id}`,
    );

    if (response.data.error) {
      return { error: response.data.error, details: response.data.details };
    }

    return response.data as UserByIdResponse;

  } catch (error) {
    console.error("Error al hacer la solicitud:", error);

    alert("Hubo un problema al obtener el usuario. Intenta nuevamente más tarde.");
    return { 
      error: "Hubo un problema al obtener el usuario. Intenta nuevamente más tarde." 
    };
  }
};

export const allUsers = async (): Promise<UserByIdResponse[] | UserByIdErrorResponse> => {
  try {
    const response = await axiosConfig.get('/api/helphub/user/allUsers');
    return response.data; // Retorna los datos de los usuarios si la solicitud es exitosa
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        error: error.message || 'Error desconocido', // Mensaje del error de Axios
      };
    }
    return {
      error: 'Error en la llamada a la API', // Mensaje genérico en caso de otros errores
    };
  }
};
