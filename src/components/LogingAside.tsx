import { LoginRequest } from "../types/AuthServiceTypes"
import { useAuthContext } from "../context/AuthContext"
import { Link } from "react-router-dom"
import PrimaryButton from "./PrimaryButton"
import useForm from "../hooks/useForm"
import UserInput from "./UserInput"
import Title from "./Title"
import Line from "./Line"
import { useEffect } from "react"
import { useAuth } from "../hooks/useAuth"
import Logo from "./Logo"

function LogingAside() {
  const { loginData, token } = useAuthContext();
  const { loginHandler } = useAuth();
  const initialFormState = {
    email: "",
    password: "" 
  };

  const sendData = async () => {
    const { email, password } = input;
    await loginHandler({ email, password })
  };

  useEffect(() => {
    if (loginData && token) {
      console.log('Login Data y Token están configurados correctamente:', loginData, token);
    }
  }, [loginData, token]);

  const { input, handleInputChange, handleSubmit } = useForm(sendData, initialFormState as LoginRequest);
  return (
    <>
      <form 
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-around lg:items-start w-full lg:w-[85%] h-full lg:h-[95%] font-roboto not-italic">

        <article className="w-full">
          <Logo
            showInitial={false}
            className="w-[15rem] h-[6rem]"
          />
          <h1 className="text-6xl font-light pt-10 pb-3 leading-tight">Conecta y Comparte</h1>
          <h2 className="text-5xl font-normal text-violeta-100 mb-3 leading-normal tracking-wide">Habilidades</h2>
        </article>

        <Line className="bg-gray-400 w-full"/>

        <div className="w-full">
          <Title title="Inicia Sesión" className="pb-3 font-normal leading-normal tracking-wide text-[34px]"/>
          <UserInput
            id="email"
            title="Email"
            type="email" 
            placeholder="ejemplo@gmail.com"
            name="email" 
            value={input.email}
            onChange={handleInputChange}
            className="loginInput h-[45px]  border-blue-gray-300"/>

          <Link to={'/reseteo'}>
            <p className="flex justify-end text-celeste-100 -mb-6 mt-4 cursor-pointer p-1 font-medium underline">¿Olvidaste tu contraseña?</p>
          </Link>

          <UserInput 
            id="password"
            title="Contraseña"
            type="password" 
            placeholder="Contraseña"
            name="password" 
            value={input.password}
            onChange={handleInputChange}
            className="loginInput h-[45px]  border-blue-gray-300" 
            positionStyles="right-4 top-[46px]"/>
        </div>

        <div className="w-full py-3">
          <PrimaryButton label="Inicia Sesión" className="bg-violeta-100 hover:bg-[#6D6DD1]"/>
        </div>

        <div className="flex justify-center mt-3 w-full">
          <p className="font-medium">¿Es tu primera vez aquí?</p>
          <Link to={'/register'}>
            <p className=" font-medium text-celeste-20 ml-5 underline">Regístrate</p>
          </Link>
        </div>
      </form>
    </>


  )
}

export default LogingAside