import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { loginUser, loginUserMail, registerUserMail, resetPassword, resetPasswordMail } from "../services/AuthService";
import { LoginRequest, RegisterRequest, ResetPasswordMailRequest } from "../types/AuthServiceTypes";
import useBackButton from "./useBackButton";
import useCode from "./useCode";
import axios from "axios";

export const useAuth = () => {
  const { handleResetShow } = useBackButton();
  const [error, setError] = useState<string | null>(null);
  const [loginError, setLoginError] = useState<{ email: boolean; password: boolean }>({
    email: false,
    password: false,
  });
  const [registerError, setRegisterError] = useState<{ email: boolean; password: boolean; phone: boolean; }>({
    email: false,
    password: false,
    phone: false,
  });
  const { resetData, setResetData, setToken,loginData, setLoginData, registerData, setRegisterData } = useAuthContext(); 
  const { twoFaCode, twoFaCode: newTwoFaCode } = useCode();
  const navigate = useNavigate();
  
  const loginHandler = async (data: LoginRequest) => {
    try {
      
      const response = await loginUser(data);
  
      if (response.access_token) {
        setLoginData({ email: data.email, twoFa: twoFaCode });
        const loginToken = response.access_token;
        await loginUserMail ({ email: data.email, twoFa: twoFaCode });
        setLoginError((prevState) => ({
          ...prevState,
          email: false,
          password: false
        }));
  
        setToken(loginToken);
        console.log('Login Data antes de la redirección:', { email: data.email, twoFa: twoFaCode });
        navigate('/codigo-seguridad')
  
      } else {
        alert('Credenciales incorrectas. Por favor, verifica tu email y contraseña.');
        navigate('/'); 
      } 
    }catch (error) {
  
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.message || 'Error desconocido';
        if(errorMessage === "Contraseña incorrecta"){
          setLoginError((prevState) => ({
            ...prevState,
            password: true
          }));
        } else if (errorMessage === "User not found"){
          setLoginError((prevState) => ({
            ...prevState,
            email: true,
          }));
        }
  
      } else {
        alert('Hubo un problema con el inicio de sesión. Por favor, intenta de nuevo.');
      }
    }
  }

  const registerHandler = async (data: RegisterRequest) => {
    const updatedData = {
      ...data,
      phone: data.phone ? `+34${data.phone}` : '',
      twoFa: twoFaCode,
      role: 'user'
    };
    console.log(updatedData)
    
    console.log('Estado guardado:', updatedData);
    
    try {
      const response = await registerUserMail(updatedData);
      setRegisterData(updatedData);
      console.log('Correo enviado:', response.message);
      setRegisterError((prevState) => ({
        ...prevState,
        email: false,
        password: false,
        phone: false,
      }));
  
      navigate('/codigo-seguridad');
  
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.message 
        console.error(`Error en la solicitud: ${errorMessage}`);
        console.log(error)
        if (
          errorMessage[0] === "Password should contain mínimum one Mayusc, one number, and one symbol." ||
              errorMessage[1] === "Password should contain minimum 6 digits." 
        ) {
          setRegisterError((prevState) => ({
            ...prevState,
            password: true,
          }));
        }
      } else {
        console.error('Error inesperado:', error);
      }
    }
  }
  
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

  const handleResendCode = async () => {
    if (registerData && !loginData) {
      const email = registerData?.email;
      if(email) {
        const updatedData = ({
          ...registerData,
          twoFa: newTwoFaCode,
        });
        setRegisterData(updatedData);
        console.log(updatedData);
    
        try {
          await registerUserMail(updatedData);
          console.log(updatedData);
        } catch(error) {
          console.error("Error al reenviar el codigo:", error);
          alert("Hubo un problema al reenviar el código. Por favor, intenta de nuevo.");
        } 
      }
    
    } else if (loginData && !registerData) {
      const email = loginData?.email;
      const twoFaCode = newTwoFaCode;
    
      if (email) {
        const updatedLoginData = {
          ...loginData,
          twoFa: newTwoFaCode, 
        };
        
        setLoginData(updatedLoginData);   
    
        if (email) {
          try {
            await loginUserMail({ email, twoFa: twoFaCode });
            alert("Código para el login reenviado al correo proporcionado.");
      
          } catch (error) {
            console.error("Error al reenviar el codigo para login:", error);
          }
        } else {
          alert("No se pudo reenviar el código porque no se encontró un correo electrónico. Por favor, intenta de nuevo.");
        } 
      } else if (resetData) {
        const email = resetData?.email;
        const twoFaCode = newTwoFaCode;

        if (email) {
          try {
            await resetPasswordMail({ email, twoFa: twoFaCode })
            alert("Código para el reset reenviado al correo proporcionado.");
          }catch (error) {
            console.error("Error al reenviar el codigo para reset:", error);
          }
        } else {
          alert("No se pudo reenviar el código porque no se encontró un correo electrónico. Por favor, intenta de nuevo.");
        }
      }
    }
  };
  
  return {
    loginHandler,
    registerHandler,
    handleResendCode,
    resetPasswordHandler,
    sendResetPasswordMailData,
    setLoginError,
    loginError,
    setRegisterError,
    registerError,
    error,
  };
};