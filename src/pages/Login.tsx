import { LuSend } from "react-icons/lu"
import Carousel from "../components/Carousel"
import LogingAside from "../components/LogingAside"
import AuthLayout from "../layouts/AuthLayout"
import { profiles } from "../Variables/varibles"
import { WiTime4 } from "react-icons/wi"
import { LiaExchangeAltSolid } from "react-icons/lia"

function Login() {
  return (

    <AuthLayout>
      <LogingAside />
      <>
        <div className="flex flex-col w-full h-full items-center">

          <h1 className=" text-[34px] text-black-80 font-normal leading normal tracking-wide text-center w-[60%]"><span className="text-violeta-100">Intercambia habilidades</span> y encuentra el impulso que buscas</h1>

          <div className="w-full">
            <Carousel profiles={profiles} />
          </div>
          <div className="absolute bottom-0 w-full flex  justify-center gap-5 text-neutral-black leading-normal tracking-wide">
            <div className="w-3/12 font-medium">
              <h6 className="text-xl font-medium leading-normal tracking-wide ">Todo lo que necesitas para un intercambio ideal</h6>
            </div>
            <div className="flex flex-col text-sm  font-normal ">
              <div className="flex items-center gap-3">
                <span><LuSend /></span>
                <p>Envía mensajes directos para conectar al instante</p>
              </div>
              <div className="flex items-center gap-3">
                <span><WiTime4 /></span>
                <p>Coordina horarios de manera fácil y rápida desde la web</p>
              </div>
              <div className="flex items-center gap-3">
                <span><LiaExchangeAltSolid /></span>
                <p>¡Encuentra el intercambio perfecto y empieza a aprender!</p>
              </div>
              
            </div>
          </div>
        </div>
      </>
    </AuthLayout>

  )
}

export default Login