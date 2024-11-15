import { HabilityErrorResponse, HabilityRequest, HabilityResponse, UserHabilitiesResponse } from "../types/AbilityServiceTypes";
import { UserByIdErrorResponse } from "../types/UserServiceTypes";
import { getToken, getUserIdFromToken } from "../utils/utils";
import axiosConfig from "./axiosConfig";

export const createHability = async (data: HabilityRequest): Promise<HabilityResponse | HabilityErrorResponse> => {
  try {
    const token = getToken();
  
    if (token) {

      const response = await axiosConfig.post(
        "/api/helphub/hability",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.error) {
        return { error: response.data.error };
      }

      return response.data as HabilityResponse;
    } else {
      throw new Error("No token found");
    }
  } catch (error) {
    console.error("Error al hacer la solicitud:", error);
    return { error: "El título de la habilidad ya existe, por favor ingrese otro diferente." };
  }
};

export const getUserHabilities = async (): Promise<UserHabilitiesResponse | UserByIdErrorResponse> => {
  try {
    const token = getToken();
    const id = getUserIdFromToken();
  
    if (!token) {
      throw new Error("No token found");
    }

    const response = await axiosConfig.get(
      `/api/helphub/hability/user-habilities/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.data.error) {
      return { error: response.data.error, details: response.data.details };
    }

    return { habilities: response.data };
  
  } catch (error) {
    console.error("Error al hacer la solicitud:", error);
 
    alert("Hubo un problema al obtener las habilidades del usuario. Intenta nuevamente más tarde.");
    return { 
      error: "Hubo un problema al obtener las habilidades del usuario. Intenta nuevamente más tarde." 
    };
  }
};
  