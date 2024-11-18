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

export const getAllHabilities = async(): Promise<UserHabilitiesResponse | UserByIdErrorResponse> => {
  try {
    const token = getToken();
  
    if (!token) {
      throw new Error("No token found");
    }

    const response = await axiosConfig.get(
      "/api/helphub/hability/allHabilities",
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

}

export const HabilitiesByCategory = async(category: string | null): Promise<UserHabilitiesResponse | UserByIdErrorResponse> => {
  try {
    const token = getToken();
  
    if (!token) {
      throw new Error("No token found");
    }

    const response = await axiosConfig.get(
      `/api/helphub/hability/category-habilities/${category}`,
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
 
    alert("Hubo un problema al obtener las categorias. Intenta nuevamente más tarde.");
    return { 
      error: "Hubo un problema al obtener las categorias. Intenta nuevamente más tarde." 
    };
  }
}

export const deleteHability = async (id: string): Promise<string> => {
  try {
    const response = await axiosConfig.delete(`/api/helphub/hability/${id}`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });

    return response.data.message;
  } catch (error) {
    console.error('Error al eliminar la habilidad:', error);
    throw new Error('No se pudo eliminar la habilidad');
  }
};

export const editHability = async (
  id: string,
  updatedData: HabilityRequest
): Promise<string | HabilityErrorResponse> => {
  try {
    const response = await axiosConfig.patch(
      `/api/helphub/hability/${id}`,
      updatedData,
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (response.data?.error) {
      return { error: response.data.error };
    }

    if (typeof response.data === 'string' && response.data.includes('was updated!')) {
      return response.data;
    }

    throw new Error('Respuesta inesperada al intentar editar la habilidad');
  } catch (error: unknown) {
    console.error('Error al editar la habilidad:', error);

    return { error: 'Hubo un problema al editar la habilidad. Intenta nuevamente más tarde.' };
  }
};
export const getHability = async (id: string): Promise<HabilityResponse> => {
  try {
    const response = await axiosConfig.get(`/api/helphub/hability/${id}`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });

    return response.data;
  } catch (error) {
    console.error('Error al obtener la habilidad:', error);
    throw new Error('No se pudo obtener la habilidad');
  }
};
