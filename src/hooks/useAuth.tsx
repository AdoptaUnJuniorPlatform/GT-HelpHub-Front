import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { resetPassword, resetPasswordMail } from "../services/AuthService";
import { ResetPasswordMailRequest } from "../types/AuthServiceTypes";
import useBackButton from "./useBackButton";
import useCode from "./useCode";
import axios from "axios";

export const useAuth = () => {
  const { handleResetShow } = useBackButton();
  const [error, setError] = useState<string | null>(null);
  const { resetData, setResetData } = useAuthContext(); 
  const { twoFaCode } = useCode();
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

  const sendResetPasswordMailData = async (data: ResetPasswordMailRequest) => {
    try {
      const response = await resetPasswordMail({ email: data.email, twoFa: twoFaCode });
      if (response.message === "Email sent successfull.") {
        setResetData({ email: data.email, twoFa: twoFaCode });
        console.log("Respuesta recibida:", response.message);
        handleResetShow();
      } else {
        console.error('Respuesta inesperada:', response);
        alert('Hubo un problema con la solicitud. Intenta de nuevo.');
      }
  
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error:', error.response?.data);
        console.error('Status Code:', error.response?.status);
      }
    }
  };
  
  return {
    resetPasswordHandler,
    sendResetPasswordMailData,
    error,
  };
};