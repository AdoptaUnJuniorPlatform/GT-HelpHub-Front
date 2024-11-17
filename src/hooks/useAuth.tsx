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
  const [resetError, setResetError] = useState<{ code: boolean; newPassword: boolean; confirmPassword: boolean; }>({
    code: false,
    newPassword: false,
    confirmPassword: false,
  });
  const [loginError, setLoginError] = useState<{ email: boolean; password: boolean }>({
    email: false,
    password: false,
  });
  const [registerError, setRegisterError] = useState<{ email: boolean; password: boolean; phone: boolean; }>({
    email: false,
    password: false,
    phone: false,
  });
  const [twoFaModal, setTwoFaModal] = useState<boolean>(false);
  const [resetMailError, setResetMailError] = useState<boolean>(false);
  const { resetData, setResetData, setToken,loginData, setLoginData, registerData, setRegisterData, isLoggedIn, isRegistering } = useAuthContext(); 
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
      twoFa: twoFaCode
    };
    
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
      setResetError((prevState) => ({
        ...prevState,
        newPassword: true,
        confirmPassword: true,
      }));
      return;
    }
    if (!code || code.length !== 6) {
      setResetError((prevState) => ({
        ...prevState,
        code: true,
      }));
      return;
    }
    if (resetData?.twoFa !== code) {
      setResetError((prevState) => ({
        ...prevState,
        code: true,
      }));
      return;
    }
    try {
      if(resetData) {
        const response = await resetPassword({
          email: resetData?.email || "",
          password: newPassword,
        });
        if (response.message === "Password account reset be done!") {
          setResetError((prevState) => ({
            ...prevState,
            code: false,
            newPassword: false,
            confirmPassword: false,
          }));
          navigate("/");
          
        } else {
          alert('Parece que hubo un problema con tu solicitid, por favor intenta de nuevo.');
          navigate('/reseteo')
        }
      } else {
        alert('Parece que hubo un problema con tu solicitid, por favor intenta de nuevo.');
        navigate('/reseteo')
      }
  
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.message 
        if (
          errorMessage[0] === "Password should contain mínimum one Mayusc, one number, and one symbol" ||
          errorMessage[1] === "Password should contain minimum 6 digits." 
        ) {
          setResetError((prevState) => ({
            ...prevState,
            newPassword: true,
            confirmPassword: true,
          }));
        }
      } else {
        alert('Parece que hubo un problema con tu solicitid, por favor intenta de nuevo.');
        navigate('/reseteo')
      }
    }
  };

  const sendResetPasswordMailData = async (data: ResetPasswordMailRequest) => {
    try {
      const response = await resetPasswordMail({ email: data.email, twoFa: twoFaCode });

      if (response.message === "Email sent successfull.") {
        setResetData({ email: data.email, twoFa: twoFaCode });
        setResetMailError(false);
        handleResetShow();

      } else if(response.message === "User does not exist") {
        setResetMailError(true)
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error:', error.response?.data);
      }
    }
  };

  const handleResendCode = async () => {
    if (registerData && !loginData) {
      const email = registerData?.email;
      if(email) {
        const updatedRegisterData = ({
          ...registerData,
          twoFa: newTwoFaCode,
        });
        setRegisterData(updatedRegisterData);
    
        try {
          await registerUserMail(updatedRegisterData);
          alert("Código para el login reenviado al correo proporcionado.");
        } catch(error) {
          console.error("Error al reenviar el codigo:", error);
          alert("Hubo un problema al reenviar el código. Por favor, intenta de nuevo.");
        } 
      }
    
    } else if (loginData) {
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
      } 
    } else if (resetData) {
      const email = resetData?.email;
      const twoFaCode = newTwoFaCode;

      if (email) {
        const updatedResetData = {
          ...resetData,
          twoFa: newTwoFaCode, 
        };

        setResetData(updatedResetData)
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

  const checkProfileAndRedirect = async () => {
    try {
      console.log("Iniciando verificación del perfil...");
      // Verificar que el token esté en localStorage
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("Token no encontrado. La autenticación no se ha completado.");
        return; // No redirigir hasta que el token esté presente
      }
  
      // Verificar el perfil
      const response = await axios.get('/api/helphub/profile', {
        headers: { Authorization: `Bearer ${token}` },
      });
  
      if (response.status === 200) {
        navigate('/home'); // Redirige a Home si el perfil ya está creado
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        // Si el perfil no existe y el usuario está autenticado, redirige a creación de perfil
        const token = localStorage.getItem("token");
        if (token) {
          navigate('/register/personal-data');
        } else {
          console.error("Autenticación incompleta. No se puede redirigir.");
        }
      } else {
        console.error("Error verificando el perfil:", error);
      }
    }
  };

  const modalNavigateHandler = async () => {
    console.log("Ejecutando modalNavigateHandler...");
    setTwoFaModal(false); // Cierra el modal
  
    if (isLoggedIn && !isRegistering) {
      console.log("Usuario logueado pero no registrándose. Verificando perfil...");
      // Usuario autenticado y no está registrándose
      await checkProfileAndRedirect(); // Verifica el perfil y redirige
    } else if (isRegistering && !isLoggedIn) {
      // Usuario en proceso de registro, pero no autenticado
      navigate('/');
    } else {
      // Caso por defecto: redirige al Home
      navigate('/home');
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
    setResetMailError,
    resetMailError,
    resetError,
    setResetError,
    twoFaModal,
    setTwoFaModal,
    modalNavigateHandler,
    checkProfileAndRedirect,
  };
};