import { LuSend } from "react-icons/lu"
import Carousel from "../components/Carousel"
import LogingAside from "../components/LogingAside"
import AuthLayout from "../layouts/AuthLayout"
import { profiles } from "../Variables/varibles"
import { WiTime4 } from "react-icons/wi"
import { LiaExchangeAltSolid } from "react-icons/lia"
import { IoClose } from "react-icons/io5"

function Login() {
  return (
    <>
      <img src="../../src/assets/Background.svg" className="absolute h-dvh w-screen right-0 opacity-10"/>
      <AuthLayout>
        <>
          <LogingAside />
        </>
        <div className="flex flex-col w-full h-full items-center">
          
          <h1 className=" text-[34px] text-black-80 font-normal leading normal tracking-wide text-center min-w-[550px] max-w-[65%]"><span className="text-violeta-100">Intercambia habilidades</span> y encuentra el impulso que buscas</h1>
          <span className="absolute text-xl text-celeste-100 font-medium leading normal tracking-wide w-48 left-[5%] top-[21%]">Únete a una red diversa de personas</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="63" 
            height="49" 
            viewBox="0 0 63 49" 
            fill="none"
            className="absolute top-[12rem] left-[14.5rem]"
          >
            <path d="M58.951 48.3917C59.1673 48.5633 59.4818 48.5271 59.6534 48.3107L62.4499 44.7851C62.6215 44.5688 62.5852 44.2543 62.3689 44.0827C62.1525 43.9111 61.838 43.9473 61.6664 44.1637L59.1807 47.2976L56.0468 44.8118C55.8305 44.6402 55.516 44.6765 55.3444 44.8928C55.1728 45.1092 55.209 45.4237 55.4254 45.5953L58.951 48.3917ZM0.193487 1.49953C9.1111 1.88516 22.7575 4.68471 34.6729 11.8195C46.5738 18.9456 56.7262 30.379 58.765 48.0573L59.7584 47.9427C57.6759 29.8855 47.2874 18.2073 35.1866 10.9615C23.1003 3.72439 9.28404 0.891702 0.236689 0.500467L0.193487 1.49953Z" fill="#496CEB"/>
          </svg>

          <span className="absolute text-xl text-celeste-100 font-medium leading normal tracking-wide w-48 right-[3%] top-[12%]">Comparte conocimientos </span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="82" 
            height="84" 
            viewBox="0 0 82 84" 
            fill="none"
            className="absolute right-[15rem] top-[8rem]"
          >
            <path d="M4.18942 83.264C4.38468 83.4592 4.70126 83.4592 4.89652 83.264L8.0785 80.082C8.27376 79.8867 8.27376 79.5701 8.0785 79.3749C7.88324 79.1796 7.56666 79.1796 7.3714 79.3749L4.54297 82.2033L1.71454 79.3749C1.51928 79.1796 1.2027 79.1796 1.00743 79.3749C0.812173 79.5701 0.812173 79.8867 1.00743 80.082L4.18942 83.264ZM81.3926 0.913796C68.4996 -0.597267 49.1672 1.6908 33.0446 13.4818C16.8959 25.2919 4.04297 46.5799 4.04297 82.9104H5.04297C5.04297 46.8409 17.7872 25.8789 33.6349 14.289C49.5087 2.67999 68.572 0.41806 81.2762 1.907L81.3926 0.913796Z" fill="#496CEB"/>
          </svg>
          <div className="w-full">
            <div className="">
              <Carousel profiles={profiles} />
            </div>
            <span className="absolute right-[11.5rem] top-[10.5rem] flex justify-center items-center text-[12px] text-neutral-black font-medium leading-[18px] h-8 w-[80px] border border-celeste-100 py-[6px] px-3 rounded-[28px]">Animales</span>

            <span className="absolute right-[4.8rem] top-[10.5rem] flex justify-between items-center text-[12px] text-white font-medium leading-[18px] h-8 w-[95px] border bg-celeste-100 py-[6px] px-3 rounded-[28px]">Idiomas <IoClose className="text-base"/></span>

            <span className="absolute right-[9.8rem] top-[13rem] flex justify-center items-center text-[12px] text-neutral-black font-medium leading-[18px] h-8 w-[80px] border border-celeste-100 py-[6px] px-3 rounded-[28px]">Informática</span>

            <span className="absolute right-[5rem] top-[13rem] flex justify-center items-center text-[12px] text-neutral-black font-medium leading-[18px] h-8 w-[65px] border border-celeste-100 py-[6px] px-3 rounded-[28px]">Diseño</span>
          </div>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="45" 
            height="29" 
            viewBox="0 0 45 29" 
            fill="none"
            className="absolute right-[17rem] bottom-[10.5rem]"
          >
            <path d="M44.4151 25.0241C44.5744 24.8031 44.535 24.4721 44.3271 24.2849L40.9393 21.2331C40.7314 21.0458 40.4338 21.0732 40.2745 21.2942C40.1151 21.5152 40.1545 21.8461 40.3624 22.0334L43.3738 24.7461L41.0662 27.9473C40.9069 28.1683 40.9462 28.4992 41.1541 28.6865C41.362 28.8738 41.6597 28.8464 41.819 28.6255L44.4151 25.0241ZM0.499496 0.723287C8.12345 19.5224 27.0109 26.7774 44.1009 25.2077L43.9765 24.1623C27.1067 25.7117 8.74299 18.5343 1.3618 0.333773L0.499496 0.723287Z" fill="#496CEB"/>
          </svg>
          <span className="absolute text-xl text-celeste-100 font-medium leading normal tracking-wide w-48 right-[6%] bottom-[17%]">Enriquece tus habilidades</span>
          <div className="absolute bottom-0 w-full gap-3 flex justify-center text-neutral-black leading-normal tracking-wide">
            <div className="flex justify-endw-6/12 font-medium">
              <h6 className="text-lg font-medium leading-normal tracking-wide w-[15rem]">Todo lo que necesitas para un intercambio ideal</h6>
            </div>
            <div className="flex flex-col text-[clamp(0.1rem,-0.085rem+0.788vw,0.9rem)] font-normal ">
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
      </AuthLayout>
    </>

  )
}

export default Login