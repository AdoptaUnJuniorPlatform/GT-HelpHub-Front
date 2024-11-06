import { RegisterRequest, AuthResponse, LoginMailRequest, LoginRequest, ResetPasswordMailRequest } from "../types/AuthServiceTypes";
import axiosConfig from "./axiosConfig";

export const registerUserMail = async (data: RegisterRequest): Promise<AuthResponse> => {
  const response = await axiosConfig.post<AuthResponse>('/api/helphub/email-service/emailAcount', data);
  return response.data;
};

export const registerUser = async (data: RegisterRequest): Promise<AuthResponse> => {
  const response = await axiosConfig.post<AuthResponse>('/api/helphub/user/register', data);
  return response.data;
};

export const loginUserMail = async (data: LoginMailRequest): Promise<AuthResponse> => {
  const response = await axiosConfig.post('/api/helphub/email-service/loginEmail', data);
  return response.data;
};

export const loginUser = async (data: LoginRequest): Promise<AuthResponse> => {
  const response = await axiosConfig.post('/api/helphub/auth/login', data);
  return response.data;
};

export const resetPasswordMail = async (data: ResetPasswordMailRequest): Promise<AuthResponse> => {
  const response = await axiosConfig.post('/api/helphub/email-service/resetEmail', data);
  return response.data;
};
