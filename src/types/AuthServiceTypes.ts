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

export interface RegisterResponse {
  message: string;
  status: number;
}