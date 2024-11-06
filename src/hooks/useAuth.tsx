import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { resetPassword } from "../services/AuthService";

export const useAuth = () => {
  const [error, setError] = useState<string | null>(null);
  const { resetData } = useAuthContext(); 
  const navigate = useNavigate();
  
  const resetPasswordHandler = async (
    newPassword: string,
    confirmPassword: string,
    code: string
  ) => {

    if (newPassword !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    if (!code || code.length !== 6) {
      setError("Por favor ingrese un código de verificación válido.");
      return;
    }
  
    if (resetData?.twoFa !== code) {
      setError("El código de verificación es incorrecto.");
      return;
    }
  
    try {
      const response = await resetPassword({
        email: resetData?.email || "",
        password: newPassword,
      });
  
      if (response.message === "Password account reset be done!") {
        navigate("/");

      } else {
        setError("Hubo un error al restablecer la contraseña.");
      }
    } catch (error) {
      console.error("Error al resetear la contraseña:", error);
      setError("Hubo un problema al resetear la contraseña. Por favor intenta nuevamente.");
    }
  };
  
  return {
    resetPasswordHandler,
    error,
  };
};