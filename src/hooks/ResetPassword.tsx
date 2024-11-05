import { Outlet } from "react-router-dom";
import Logo from "../components/Logo";
import PrimaryButton from "../components/PrimaryButton";
import UserInput from "../components/UserInput";
import AuthLayout from "../layouts/AuthLayout";
import SentMailAlert from "../components/SentMailAlert";
import BackButton from "../components/BackButton";
import useBackButton from "./useBackButton";
import NextButton from "../components/NextButton";

function ResetPassword() {
  const { handleResetShow, showForm, showAlert } = useBackButton();
  
  return (

    <AuthLayout>
      <div className="relative flex flex-col w-full h-full justify-center items-center">
        <div className="absolute left-[20%] flex flex-col items-center justify-center w-full max-w-[500px] gap-20">
          <div className="w-full">
            <Logo 
              showInitial={false}
              className="w-[15.5rem] min-w-[6.3rem]"
            />
          </div>
          <h3 className="text-5xl text-violeta-100 font-normal leading-normal tracking-wide">¿Ha olvidado su contraseña?</h3>
        </div>
      </div>
      <>
        <div className="flex flex-col w-full h-full pt-5">

          {showAlert &&  <SentMailAlert />}

          <div className="w-9/12 py-5">
            <h3 className="text-[2.2rem] font-normal leading-normal tracking-wide text-neutral-black self-stretch">Reseteo de contraseña</h3>
            <p className="text-xl font-normal leading-normal text-neautral-black">Por favor, introduce tu correo electrónico y te enviaremos un código para restablecer tu contraseña.</p>
          </div>
          <div className="flex flex-col w-full justify-start py-5">
            <UserInput 
              id="email"
              type="email" 
              placeholder="Email"
              className="loginInput w-10/12 h-[2.5rem] border-blue-gray-100"
            />
            {!showForm && (
              <>
                <PrimaryButton 
                  label="Restablecer contraseña"
                  className="bg-violeta-100 font-medium mt-5"
                  onClick={handleResetShow}
                />
                <div className="absolute flex w-full justify-evenly bottom-0">
                  <BackButton
                    type="button" />
                  <NextButton
                    type="submit"
                    onClick={() => {}}
                    label="GUARDAR"
                    className="text-celeste-100 invisible"
                  />
                </div>
              </>
            )}
            {showForm && <Outlet />}
          </div>
        </div>
      </>
    </AuthLayout>
  )
}

export default ResetPassword