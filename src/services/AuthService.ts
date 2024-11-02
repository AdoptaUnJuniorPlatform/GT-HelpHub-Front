import { RegisterRequest, RegisterResponse } from "../types/AuthServiceTypes";
import axiosConfig from "./axiosConfig";

export const registerUserMail = async (data: RegisterRequest): Promise<RegisterResponse> => {
  const response = await axiosConfig.post<RegisterResponse>('/api/helphub/email-service/emailAcount', data);
  return response.data;
};

export const registerUser = async (data: RegisterRequest): Promise<RegisterResponse> => {
  const response = await axiosConfig.post<RegisterResponse>('/api/helphub/user/register', data);
  return response.data;
};