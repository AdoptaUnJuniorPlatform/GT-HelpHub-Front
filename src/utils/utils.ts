import { jwtDecode } from "jwt-decode";

interface JwtPayload {
  sub: string;
  user: string;
  iat: number;
  exp: number;
}

export function getUserIdFromToken(): string | null {
  const token = localStorage.getItem("token"); 
  if (token) {
    try {
  
      const decoded = jwtDecode<JwtPayload>(token);
  
      return decoded.sub;
    } catch (error) {
      console.error("Error al decodificar el token", error);
      return null;
    }
  } else {
    console.log("No hay token en localStorage");
    return null;
  }
}

export const getToken = (): string | null => {
  return localStorage.getItem("token");
};