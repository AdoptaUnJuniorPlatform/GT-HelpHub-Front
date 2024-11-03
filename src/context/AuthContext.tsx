import { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import { AuthContextProps, LoginMailRequest, RegisterRequest } from '../types/AuthServiceTypes';
  
const AuthContext = createContext<AuthContextProps | undefined>(undefined);
  
function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const [registerData, setRegisterData] = useState<RegisterRequest | null>(null);
  const [loginData, setLoginData] = useState<LoginMailRequest | null>(null);
  
  const isLoggedIn = useMemo(() => !!token, [token]);
  
  function clearData() {
    setRegisterData(null);
  }

  function clearToken() {
    setToken(null);
    localStorage.removeItem('token');
  }
  
  return (
    <AuthContext.Provider value={{
      token, 
      setToken, 
      clearToken, 
      registerData, 
      setRegisterData, 
      clearData,
      isLoggedIn,
      loginData,
      setLoginData 
    }}
    >
      {children}
    </AuthContext.Provider>
  );
}
  
function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useRegisterContext debe ser usado dentro de un RegisterProvider');
  }
  return context;
}
  
export { AuthProvider, useAuthContext };