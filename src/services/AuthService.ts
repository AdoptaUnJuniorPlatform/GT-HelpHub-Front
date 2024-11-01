import { RegisterRequest, RegisterResponse } from "../types/AuthServiceTypes";
import axiosConfig from "./axiosConfig";

export const registerUser = async (data: RegisterRequest): Promise<RegisterResponse> => {
  const response = await axiosConfig.post<RegisterResponse>('/api/helphub/email-service/emailAcount', data);
  return response.data;
};