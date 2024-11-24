import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { UserByIdResponse, UserContextType } from '../types/UserServiceTypes';
import { allUsers, userById } from '../services/UserService';
import { useAuthContext } from './AuthContext';



const UserContext = createContext<UserContextType | undefined>(undefined);

function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserByIdResponse | null>(null);
  const [users, setUsers] = useState<UserByIdResponse[] | null>(null);
  const { isAuthenticated } = useAuthContext();
  const fetchUser = async () => {
    const response = await userById();

    if ('error' in response) {
      setUser(null);
      console.error('Error al obtener usuario:', response.error);
    } else {
      setUser(response);
    }
  };

  const fetchAllUsers = async () => {
    const result = await allUsers();

    if ('error' in result) {
      setUsers(null);
    } else {
      setUsers(result);

    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchUser();
      fetchAllUsers();
    }
  }, [isAuthenticated]);

  return (
    <UserContext.Provider value={{ user, setUser, fetchUser, users, fetchAllUsers }}>
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
