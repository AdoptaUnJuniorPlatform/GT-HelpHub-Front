import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

interface JwtPayload {
  sub: string;
  user: string;
  iat: number;
  exp: number;
}

function useDecodeToken() {

  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    function getUserIdFromToken(): string | null {
      const token = localStorage.getItem("token");
  
      if (token) {
        try {
          const decoded = jwtDecode<JwtPayload>(token);
          const id = decoded.sub;
          return id;
        } catch (error) {
          console.error("Error al decodificar el token", error);
          return null;
        }
      } else {
        console.log("No hay token en localStorage");
        return null;
      }
    }
  
    const id = getUserIdFromToken();
    setUserId(id);
  }, []);

  const getToken = (): string | null => {
    return localStorage.getItem("token");
  };
  
  return { userId, getToken };
}

export default useDecodeToken