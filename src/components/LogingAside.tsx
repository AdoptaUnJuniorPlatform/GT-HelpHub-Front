import { Link } from "react-router-dom"
import Line from "./Line"
import PasswordCheckbox from "./PasswordCheckbox"
import PrimaryButton from "./PrimaryButton"
import Title from "./Title"
import UserInput from "./UserInput"

function LogingAside() {
  return (
    <>
      <aside className="flex justify-center items-center w-full lg:w-[650px] lg:h-[90vh] sm:h-[95vh] bg-violeta-20 flex-shrink-0 text-neutral-black p-4 lg:p-0 
  rounded-b-[40px] lg:rounded-l-[40px] lg:rounded-b-none">
        <section className="flex flex-col items-center justify-around lg:items-start w-full lg:w-[72%] h-full lg:h-[90%] lg:ml-14 font-roboto not-italic">

          <article className="w-full">
            <h1 className="text-6xl font-light tracking-tight mb-3">Te invitamos a nuestra </h1>
            <h2 className="text-5xl font-normal text-violeta-100 mb-3">Gran Comunidad</h2>
            <p className="text-xl font-medium tracking-wide leading-normal mb-3">Conéctate, colabora y crece junto a nuestra comunidad.</p>
            <p className="text-xl font-normal tracking-wide leading-normal mb-2">Inicia sesión para compartir tus habilidades y aprender de otros. </p>
          </article>

          <Line className="bg-gray-400 w-full"/>

          <div className="w-full">
            <Title title="Inicia Sesión"/>
            <UserInput
              type="email" 
              placeholder="ejemplo@gmail.com"
              name="email" 
              className="loginInput h-[45px]  border-blue-gray-300"/>
            <a className="flex justify-end text-violeta-100 -mb-2 cursor-pointer p-1 ">¿Olvidaste tu contraseña?</a>
            <UserInput 
              type="password" 
              placeholder="Contraseña"
              name="password" 
              className="loginInput h-[45px]  border-blue-gray-300" 
              positionStyles="right-5 top-[22px]"/>
            <PasswordCheckbox label="Recuerdame"/>
          </div>

          <div className="w-full py-3">
            <Link to={"/home"}>
              <PrimaryButton label="Inicia Sesión" className="bg-violeta-100 hover:bg-[#6D6DD1]"/>
            </Link>
          </div>

          <div className="flex justify-center mt-3 w-full">
            <p className="font-normal">¿Es tu primera vez aquí?</p>
            <Link to={'/register'}>
              <p className=" font-normal text-celeste-20 ml-5 ">Regístrate</p>
            </Link>
          </div>
        </section>
      </aside>
    </>


  )
}

export default LogingAside