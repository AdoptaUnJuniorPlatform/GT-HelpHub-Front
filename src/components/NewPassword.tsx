import BackButton from "./BackButton"
import NextButton from "./NextButton"
import ResendButton from "./ResendButton"
import UserInput from "./UserInput"

function NewPassword() {
  return (
    <div className="flex flex-col justify-between">
      <div className="flex gap-10 py-3">
        <p className="text-[14px] font-medium leading-normal text-black-80">¿Aún no recibes el código?</p>
        <ResendButton 
          type= "button"
          onClick={() => {}}
        /> 
      </div>
      <div className="py-7">
        <h3 className="text-[2.2rem] font-normal leading-normal tracking-wide text-neutral-black self-stretch">Nueva contraseña</h3>
        <p className="text-xl font-normal leading-normal text-neautral-black">Por favor, introduce el código de verificación para restablecer tu contraseña.</p>
      </div>
      <div className="py-5">
        <UserInput
          type="number"
          className="loginInput"
          placeholder="Código"
        />
        <UserInput
          type="password"
          className="loginInput"
          placeholder="Nueva contraseña"
          positionStyles="top-[22px] right-[15px]"
        />
        <UserInput
          type="password"
          className="loginInput"
          placeholder="Confirmar nueva contraseña"
          positionStyles="top-[22px] right-[15px]"
        />
      </div>
      <div className="absolute flex w-full justify-evenly bottom-0">
        <BackButton
          type="button" />
        <NextButton
          type="submit"
          onClick={() => {}}
          label="GUARDAR"
          className="text-celeste-100"
        />
      </div>
    </div>
  )
}

export default NewPassword