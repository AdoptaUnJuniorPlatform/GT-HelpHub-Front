export interface UserByIdResponse {
  _id: string;
  email: string;
  password: string;
  nameUser: string;
  surnameUser: string;
  phone: string;
  optionCall: boolean;
  showPhone: boolean;
  blocked: boolean;
  __v: number;
}

export interface UserByIdErrorResponse {
  error: string;
  details?: string;
}