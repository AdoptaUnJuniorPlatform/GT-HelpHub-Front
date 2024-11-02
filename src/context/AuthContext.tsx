import { createContext, ReactNode, useContext, useState } from 'react';
import { RegisterRequest } from '../types/AuthServiceTypes';

// interface RegisterData {
//   email: string;
//   password: string;
//   nameUser: string;
//   surnameUser: string;
//   phone: string;
//   optionCall: boolean;
//   showPhone: boolean;
//   blocked: boolean;
//   twoFa: string;
//   role: string;
// }

interface RegisterContextProps {
  registerData: RegisterRequest | null;
  setRegisterData: (data: RegisterRequest) => void;
  clearData: () => void;
}
  
const RegisterContext = createContext<RegisterContextProps | undefined>(undefined);
  
function RegisterProvider({ children }: { children: ReactNode }) {
  const [registerData, setRegisterData] = useState<RegisterRequest | null>(null);
  
  function clearData() {
    setRegisterData(null);
  }
  
  return (
    <RegisterContext.Provider value={{ registerData, setRegisterData, clearData }}>
      {children}
    </RegisterContext.Provider>
  );
}
  
function useRegisterContext() {
  const context = useContext(RegisterContext);
  if (!context) {
    throw new Error('useRegisterContext debe ser usado dentro de un RegisterProvider');
  }
  return context;
}
  
export { RegisterProvider, useRegisterContext };