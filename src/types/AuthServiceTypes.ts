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
  statusCode: number;
}

export interface LoginMailRequest {
  email: string;
  twoFa: string ;
}
export interface LoginRequest {
  email: string;
  password: string;
}

export interface ResetPasswordMailRequest {
  email: string;
  twoFa: string ;
}

export interface ResetPasswordRequest {
  email: string;
  password: string;
}

export interface ProfileData {
  description: string;
  interestedSkills: string[];
  location: string;
  profilePicture: string;
  preferredTimeRange: string;
  selectedDays: string[];
}

export interface HabilityData {
  title: string;
  level: string;
  mode: string;
  description: string;
  category: string;
}

export interface AuthContextProps {
  token: string | null;
  setToken: (token: string | null) => void;
  registerData: RegisterRequest | null;
  setRegisterData: (data: RegisterRequest) => void;
  isRegistering: boolean;
  setIsRegistering: React.Dispatch<React.SetStateAction<boolean>>;
  clearData: () => void;
  isLoggedIn: boolean;
  loginData: LoginMailRequest | null;
  setLoginData: (data: LoginMailRequest | null) => void;
  handleLogout: () => void;
  resetData: ResetPasswordMailRequest | null;
  profileData: ProfileData | null; 
  setProfileData: (data: ProfileData | null) => void;
  habilityData: HabilityData | null;
  setHabilityData: (data: HabilityData | null) => void;
  userId: string | null;
  setUserId: (id: string | null) => void;
  imageId: string | null; 
  setImageId: (id: string | null) => void;
  setResetData: (data: ResetPasswordMailRequest | null) => void
  isAuthenticated: boolean;
}