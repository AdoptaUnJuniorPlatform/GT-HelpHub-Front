import { createContext, useContext, useState, useEffect, ReactNode, Dispatch, SetStateAction } from 'react';
import { UserByIdResponse } from '../types/UserServiceTypes';
import { userById } from '../services/UserService';

interface UserContextType {
  user: UserByIdResponse | null;
  setUser: Dispatch<SetStateAction<UserByIdResponse | null>>;
  fetchUser: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserByIdResponse | null>(null);

  const fetchUser = async () => {
    const response = await userById();

    if ('error' in response) {
      setUser(null);
      console.error('Error al obtener usuario:', response.error);
    } else {
      setUser(response);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
  console.log("Usuario:", user)
  return (
    <UserContext.Provider value={{ user, setUser, fetchUser }}>
      {children}
    </UserContext.Provider>
  );
}

function useUserContext() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext debe ser usado dentro de un UserProvider');
  }
  return context;
}

export { UserProvider, useUserContext };
