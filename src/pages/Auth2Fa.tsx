import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import CodeInput from "../components/CodeInput";
import NextButton from "../components/NextButton";
import ResendButton from "../components/ResendButton";
import { useAuthContext } from "../context/AuthContext";
import useCode from "../hooks/useCode";
import useForm from "../hooks/useForm";
import AuthLayout from "../layouts/AuthLayout";
import { loginUserMail, registerUser, registerUserMail } from "../services/AuthService";
import { RegisterRequest } from "../types/AuthServiceTypes";

function Auth2Fa() {
  const { registerData, setRegisterData, isLoggedIn, loginData, token } = useAuthContext();
  const { twoFaCode: newTwoFaCode } = useCode();
  const navigate = useNavigate();
  
  const { input: code, handleInputChange, handleSubmit } = useForm(
    async (input) => {
      const codeString = input.join("");
      console.log("Código ingresado:", codeString);

      const expectedCode = registerData ? registerData?.twoFa : loginData?.twoFa;
      
      if (!expectedCode) {
        console.error("No se pudo obtener el código 2FA.");
        alert("Hubo un problema al intentar validar el código. Intenta de nuevo.");
        navigate('/');
        return;
      }

      if (codeString === expectedCode) {
        console.log("Codigo correcto,  procediendo con la autenticación...");

        if (registerData) {
          const dataToSend: RegisterRequest = {
            ...registerData,
            twoFa: codeString,
            role: 'user',
          };

          try {
            await registerUser(dataToSend);
            console.log("Registroexitoso:", dataToSend);
            navigate('/')

          } catch (error) {
            console.error("Error al registrar:", error);
            alert("Hubo un problema durante el registro. Por favor, intenta de nuevo.");
          }
        } else {
          
          console.log("Loginexitoso: autenticacion completada.");

          if(token) {
            localStorage.setItem('token', token);
            if (isLoggedIn) {
              navigate('/home')
            }
          } else {
            navigate('/personal-data')
          }
        }
      } else {
        console.error("Codio incorrecto, intenta de nuevo.")
        navigate('/')
      }
    },
    Array(6).fill("")
  );

  const handleResendCode = async () => {
    if (registerData) {
      const updatedData = ({
        ...registerData,
        twoFa: newTwoFaCode,
      });

      setRegisterData(updatedData);

      try {
        await registerUserMail(updatedData);
        console.log("Nuevo código enviado:", newTwoFaCode);
        console.log("Nueva Data", updatedData)

      } catch(error) {
        console.error("Error al reenviar el codigo:", error);
        alert("Hubo un problema al reenviar el código. Por favor, intenta de nuevo.");
      } 
    } else {
      const email = loginData?.email;
      const twoFaCode = newTwoFaCode;

      if (email) {
        try {
          await loginUserMail({ email, twoFa: twoFaCode });
          console.log("Nuevo código 2FA enviado para login:", twoFaCode);
          alert("Código para el login reenviado al correo proporcionado.");
        } catch (error) {
          console.error("Error al reenviar el codigo para login:", error);
        }
      } else {
        console.error("Error: No se encontró el email para reenviar el código.");
        alert("No se pudo reenviar el código porque no se encontró un correo electrónico. Por favor, intenta de nuevo.");
      }
    }
  };

  return (
    <AuthLayout>
      <p></p>
      <form 
        onSubmit={handleSubmit}
        className="flex flex-col h-full"
      >
        <div className="max-w-[700px] w-full h-full flex flex-col justify-evenly mx-auto">
          <div className="w-full">
            <h1 className=" max-w-[650px] w-full text-4xl text-neutral-black font normal leading-normal">Introduce el código que hemos enviado a <span className="text-violeta-100">usuario@gmail.com</span></h1>
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
            <div className="w-full py-5 px-[14px] gap-3 self rounded-lg bg-[#EEF1FF]">
              <p className="text-violeta-100 text-base font-normal leading-normal tracking-wide">
                Puedes configurar en cualquier momento a través de 
                <span> Perfil &gt; Editar perfil</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-evenly w-full">
          <BackButton
            type="button"
            onClick={() => {} } />
          <NextButton
            type="submit"
            onClick={() => {}}
          />
        </div>
      </form>
    </AuthLayout>
  )
}

export default Auth2Fa

