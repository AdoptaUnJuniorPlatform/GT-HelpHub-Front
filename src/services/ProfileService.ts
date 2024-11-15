import { ProfileByIdErrorResponse, ProfileByIdResponse } from "../types/ProfileServiceTypes";
import axiosConfig from "./axiosConfig";
import { getToken, getUserIdFromToken } from "../utils/utils";

export const profileById = async (): Promise<ProfileByIdResponse | ProfileByIdErrorResponse> => {
  try {
    const id = getUserIdFromToken();
    const token = getToken();

    if (!id || !token) {
      throw new Error("No token or user ID found");
    }
  
    const response = await axiosConfig.get(
      `/api/helphub/profile/byUserId/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.data.error) {
      return { error: response.data.error, details: response.data.details };
    }
  
    return response.data as ProfileByIdResponse;
  
  } catch (error) {
    console.error("Error al hacer la solicitud:", error);
  
    alert("Hubo un problema al obtener el perfil. Intenta nuevamente más tarde.");
    return { error: "Hubo un problema al obtener el perfil. Intenta nuevamente más tarde." };
  }
};