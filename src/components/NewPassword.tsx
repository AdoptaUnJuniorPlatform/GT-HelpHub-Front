import { useEffect } from "react";
import BackButton from "./BackButton"
import NextButton from "./NextButton"
import ResendButton from "./ResendButton"
import UserInput from "./UserInput"
import { useAuthContext } from "../context/AuthContext";
import useForm from "../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function NewPassword() {
  const {resetData} = useAuthContext();
  const { resetPasswordHandler, handleResendCode, setResetError, resetError } = useAuth(); 
  const navigate = useNavigate();
  const initialFormState = {
    code: "",
    newPassword: "",
    confirmPassword: "",
  };

  const sendData = async () => {
    const { newPassword, confirmPassword, code } = input;

    if( input.code === resetData?.twoFa && input.newPassword === input.confirmPassword) {
      await resetPasswordHandler(newPassword, confirmPassword, code);

    } else if (!code || input.code.length !== 6) {
      setResetError((prevState) => ({
        ...prevState,
        code: true,
      }));
      return;

    } else if (resetData?.twoFa !== code) {
      setResetError((prevState) => ({
        ...prevState,
        code: true,
      }));
      return;
    } else if (newPassword !== confirmPassword) {
      setResetError((prevState) => ({
        ...prevState,
        newPassword: true,
        confirmPassword: true,
      }));
      return;
    }
  };
  
  useEffect(() => {
    if (!resetData) {
      navigate("/");
    }
  }, [resetData, navigate]);
  
  const { handleSubmit, handleInputChange, input } = useForm(
    sendData,
    initialFormState
  );
  return (
    <form 
      onSubmit={handleSubmit}
      className="flex flex-col justify-between">
      <div className="flex gap-10 py-3">
        <p className="text-[14px] font-medium leading-normal text-black-80">¿Aún no recibes el código?</p>
        <ResendButton 
          type= "button"
          onClick={handleResendCode}
        /> 
      </div>
      <div className="py-7">
        <h3 className="text-[2.2rem] font-normal leading-normal tracking-wide text-neutral-black self-stretch">Nueva contraseña</h3>
        <p className="text-xl font-normal leading-normal text-neautral-black">Por favor, introduce el código de verificación para restablecer tu contraseña.</p>
      </div>
      <div className="py-5">
        <UserInput
          id="code"
          type="text"
          maxLength={6}
          name="code"
          value={input.code}
          onChange={handleInputChange}
          className={`loginInput ${resetError.code ? 'outline-red-500 border-red-500' : 'outline-violeta-100'}`}
          placeholder="Código"
        />
        <UserInput
          id="newPassword"
          type="password"
          name="newPassword"
          className={`loginInput ${resetError.newPassword ? 'outline-red-500 border-red-500 ' : 'outline-violeta-100'}`}
          placeholder="Nueva contraseña"
          value={input.newPassword}
          onChange={handleInputChange}
          positionStyles="top-[22px] right-[15px]"
        />
        <UserInput
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          className={`loginInput ${resetError.confirmPassword ? 'outline-red-500 border-red-500 ' : 'outline-violeta-100'}`}
          value={input.confirmPassword}
          onChange={handleInputChange}
          placeholder="Confirmar nueva contraseña"
          positionStyles="top-[22px] right-[15px]"
        />
      </div>
      <div className="absolute flex w-full justify-evenly bottom-0">
        <BackButton
          type="button" 
          label="ATRÁS"
          className="text-black-80"
        />
        <NextButton
          type="submit"
          onClick={() => {}}
          label="GUARDAR"
          className="text-celeste-100"
        />
      </div>
    </form>
  )
}

export default NewPassword