export interface RegisterRequest {
  email: string;
  password: string;
  nameUser: string;
  surnameUser: string;
  phone: string;
  optionCall: boolean;
  showPhone: boolean;
  blocked: boolean;
  twoFa: string;
  role: string;
}

export interface AuthResponse {
  access_token?: string;
  message?: string;
  status: number;
}

export interface LoginMailRequest {
  email: string;
  twoFa: string;
}
export interface LoginRequest {
  email: string;
  password: string;
}
export interface AuthContextProps {
  token: string | null;
  setToken: (token: string | null) => void;
  registerData: RegisterRequest | null;
  setRegisterData: (data: RegisterRequest) => void;
  clearData: () => void;
  clearToken: () => void;
}