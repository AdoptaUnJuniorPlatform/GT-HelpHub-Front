import { loginUserMail, registerUser, registerUserMail } from "../services/AuthService";
import { RegisterRequest } from "../types/AuthServiceTypes";
import { useAuthContext } from "../context/AuthContext";
import ResendButton from "../components/ResendButton";
import { FaRegCircleCheck } from "react-icons/fa6";
import BackButton from "../components/BackButton";
import NextButton from "../components/NextButton";
import CodeInput from "../components/CodeInput";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import useCode from "../hooks/useCode";
import useForm from "../hooks/useForm";
import Logo from "../components/Logo";
import axios from "axios";

function Auth2Fa() {
  const { registerData, setRegisterData, isRegistering, setIsRegistering, loginData, setLoginData, token, isLoggedIn } = useAuthContext();
  const { twoFaCode: newTwoFaCode } = useCode();
  const navigate = useNavigate();
  const { input: code, handleInputChange, handleSubmit } = useForm(
    async (input) => {

      const codeString = input.join("");

      let expectedCode;

      if (registerData && !loginData) {

        expectedCode = registerData.twoFa;
      } else if (loginData && registerData) {

        expectedCode = loginData.twoFa;
      } else if (loginData && !registerData) {

        expectedCode = loginData.twoFa;
      } else {
        alert("Hubo un problema al intentar validar el código. Intenta de nuevo.");

        navigate('/');
        return;
      }
      console.log("expectedCode:", expectedCode);
      console.log("registerData:", registerData);
      console.log("loginData:", loginData);

      if (codeString === expectedCode) {
        console.log('los codigos coinciden', codeString, expectedCode)

        if (registerData && !loginData) {
          const dataToSend: RegisterRequest = {
            ...registerData,
            twoFa: codeString,
            role: 'user',
          };

          try {
            await registerUser(dataToSend);
            setIsRegistering(true);
            navigate('/')

          } catch (error) {
            if (axios.isAxiosError(error)) {
              console.error('Error en la solicitud:', error.response?.data);
              console.error('Estado del error:', error.response?.status, dataToSend);
            } else {
              console.error('Error inesperado:', error);
            }
          } 
        } else {

          if(token) {
            localStorage.setItem('token', token);
            if (isLoggedIn && !isRegistering) {
              navigate('/home')
            } else {
              navigate('/register/personal-data')
            }
          }
        }
      } else {
        alert("Codigo incorrecto. Por favor, intenta de nuevo.");
        navigate('/')
      }
    },
    Array(6).fill("")
  );

  console.log("loginData:", loginData);
  console.log("registerData:", registerData);

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

    } else{
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
        }  } else {
        alert("No se pudo reenviar el código porque no se encontró un correo electrónico. Por favor, intenta de nuevo.");
      }
    }
  };

  return (
    <AuthLayout>
      <div className="flex flex-col w-9/12 h-[58.5rem] items-center justify-center gap-10 -mt-20">
        <div className="flex flex-col justify-center items-start w-full pl-7">
          <Logo 
            showInitial={false}
            className="w-60 h-24"
          />
        </div>
        <div className="flex flex-col justify-center items-start gap-9">
          <h1 className="text-5xl font-notmal leadind-normal text-violeta-100 mt-10">Protege tu cuenta</h1>
          <h2 className="text-[34px] font-normal leading-normal max-w-[400px]">Autenticación en dos factores (2FA)</h2>
          <div className="flex items-center gap-2 max-w-[360px]">
            <span><FaRegCircleCheck className="fill-celeste-100"/></span>
            <h3 className="text-xl font-medium leading-normal text-black-80">Agregue acceso a la cuenta seguro y protegido</h3>
          </div>
          <div className="flex items-center gap-2 max-w-[360px]">
            <span><FaRegCircleCheck className="fill-celeste-100"/></span>
            <h3 className="text-xl font-medium leading-normal text-black-80">Reduce el riesgo de inicio de sesión no autorizada en las cuentas</h3>
          </div>
        </div>

      </div>
      <form 
        onSubmit={handleSubmit}
        className="flex flex-col h-full"
      >
        <div className=" w-full h-full flex flex-col justify-evenly mx-auto">
          <div className="w-full">
            <h1 className="w-full text-4xl text-neutral-black font normal leading-normal">Introduce el código que hemos enviado a <span className="text-violeta-100">usuario@gmail.com</span></h1>
            <p className="text-[20px] font-normal leading-normal text-neutral-black">Puede que tarde un minuto en recibir el correo. </p>
          </div>
          <div className="w-full -mt-20">
            <span className="text-[14px] text-[#263238] font-medium leading-5">Código email</span>
            <div className="flex gap-4">
              {code.map((val, i) => (
                <CodeInput
                  key={i}
                  type="text"
                  name={`code-input-${i}`}
                  value={val}
                  onChange={(e) => handleInputChange(e, i)}
                />
              ))}
            </div>
            <span className="text-sm font-normal leading normal tracking-wide text-black-80">Escribe aquí tu código (6 dígitos)</span>
          </div>

          <div className="flex flex-col gap-8 mb-16 -mt-16">
            <div className="flex gap-10 pb-3">
              <p className="text-[14px] font-medium leading-normal text-black-80">¿Aún no recibes el código?</p>
              <ResendButton 
                type= "button"
                onClick={handleResendCode}
              /> 
            </div>
            <div className=" w-full py-5 px-[14px] gap-3 self rounded-lg bg-[#EEF1FF]">
              <p className="text-violeta-100 text-base font-normal leading-normal tracking-wide">
                Puedes configurar en cualquier momento a través de 
                <span> Perfil &gt; Editar perfil</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-evenly w-full">
          <BackButton
            type="button" />
          <NextButton
            type="submit"
            label="SIGUIENTE"
            className="text-black-50"
          />
        </div>
      </form>
    </AuthLayout>
  )
}

export default Auth2Fa
