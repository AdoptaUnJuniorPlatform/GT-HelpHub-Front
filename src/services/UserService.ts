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
