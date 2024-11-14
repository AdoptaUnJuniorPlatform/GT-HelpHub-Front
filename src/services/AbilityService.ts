import axiosConfig from "./axiosConfig";

interface HabilityRequest {
  title: string;
  level: string;
  mode: string;
  description: string;
  category: string[];
}

interface HabilityResponse {
  title: string;
  level: string;
  mode: string;
  description: string;
  category: string[];
  user_id: string;
  _id: string;
  __v: number;
}

interface HabilityErrorResponse {
  error: string;
}

const getToken = (): string | null => {
  return localStorage.getItem("token");
};

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
  