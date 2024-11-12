import { LoginRequest } from "../types/AuthServiceTypes"
import { Link } from "react-router-dom"
import PrimaryButton from "./PrimaryButton"
import useForm from "../hooks/useForm"
import UserInput from "./UserInput"
import Title from "./Title"
import Line from "./Line"
import { useAuth } from "../hooks/useAuth"
import Logo from "./Logo"
import { regex } from "../Variables/varibles"

function LogingAside() {
  const { loginHandler, setLoginError, loginError } = useAuth();
  const initialFormState = {
    email: "",
    password: "" 
  };

  const sendData = async () => {
    const { email, password } = input;

    if (regex.test(email)) {
      await loginHandler({ email, password })
    } else {
      setLoginError(true);
    }
  };

  const { input, handleInputChange, handleSubmit } = useForm(sendData, initialFormState as LoginRequest);
  return (
    <>
      <form 
        onSubmit={handleSubmit}
        className=" absolute flex flex-col items-center justify-around lg:items-start w-full lg:w-[85%] h-full lg:h-[95%] font-roboto not-italic z-50">

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
            className={`loginInput h-[45px]  border-blue-gray-300 ${ loginError ? 'outline-red-500 border-red-500' : 'outline-violeta-100'}`}/>

          <Link to={'/reseteo'}>
            <p className="flex justify-end text-celeste-100 -mb-6 mt-4 cursor-pointer p-1 font-medium underline">¿Ha olvidado su contraseña? </p>
          </Link>

          <UserInput 
            id="password"
            title="Contraseña"
            type="password" 
            placeholder="********"
            name="password" 
            value={input.password}
            onChange={handleInputChange}
            className={`loginInput h-[45px]  border-blue-gray-300 ${ loginError ? 'outline-red-500 border-red-500' : 'outline-violeta-100'}`} 
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