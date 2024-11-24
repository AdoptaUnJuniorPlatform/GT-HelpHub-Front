import { AuthContextProps, LoginMailRequest, RegisterRequest, ResetPasswordMailRequest } from '../types/AuthServiceTypes';
import { createContext, ReactNode, useContext, useMemo, useState } from 'react';
  
const AuthContext = createContext<AuthContextProps | undefined>(undefined);
  
function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const [registerData, setRegisterData] = useState<RegisterRequest | null>(null);
  const [isRegistering, setIsRegistering] = useState<boolean>(false);
  const [loginData, setLoginData] = useState<LoginMailRequest | null>(null);
  const [resetData, setResetData] = useState<ResetPasswordMailRequest | null>(null)
  const isLoggedIn = useMemo(() => !!token, [token]);
  
  function clearData() {
    setRegisterData(null);
    setLoginData(null);
    localStorage.removeItem('email')
    localStorage.removeItem('code')
  }

  function handleLogout() {
    setToken(null);
    localStorage.removeItem('token');
    clearData();
  }
  
  return (
    <AuthContext.Provider value={{
      token, 
      setToken, 
      registerData, 
      setRegisterData, 
      isRegistering,
      setIsRegistering,
      clearData,
      isLoggedIn,
      loginData,
      setLoginData,
      handleLogout,
      resetData,
      setResetData 
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