import AgreementCheckbox from "../components/AgreementCheckbox"
import RegisterOptional from "../components/RegisterOptional"
import RegisterAtivate from "../components/RegisterAtivate"
import PrimaryButton from "../components/PrimaryButton"
import RegisterAside from "../components/RegisterAside"
import RegisterName from "../components/RegisterName"
import PhoneSelect from "../components/PhoneSelect"
import UserInput from "../components/UserInput"
import { useAuth } from "../hooks/useAuth"
import Switch from "../components/Switch"
import Title from "../components/Title"
import useForm from "../hooks/useForm"
import Note from "../components/Note"
import { regex } from "../Variables/varibles"
import AuthLayout from "../layouts/AuthLayout"

function Register() {
  const { registerHandler, setRegisterError, registerError } = useAuth();
  const initialFormState = {
    email: '',
    password: '',
    nameUser: '',
    surnameUser: '',
    phone: '',
    optionCall: false,
    showPhone: false,
    blocked: false,
    twoFa: '',
    role: 'user'
  };

  const sendData = async () => {
    const { 
      email, 
      password, 
      nameUser, 
      surnameUser, 
      phone,optionCall, 
      showPhone, 
      blocked, 
      twoFa, 
      role 
    } = input;
    if (regex.test(email) && input.phone.length === 9) {
      await registerHandler ({
        email, 
        password, 
        nameUser, 
        surnameUser, 
        phone,
        optionCall, 
        showPhone, 
        blocked, 
        twoFa, 
        role
      })
    }else if (input.phone.length < 9) {
      setRegisterError((prevState) => ({
        ...prevState,
        phone: true,
      }))

    }else {
      setRegisterError((prevState) => ({
        ...prevState,
        email: true,
      }))
    }
  };

  const { input, handleInputChange, handleSwitchChange, handleSubmit } = useForm(sendData, initialFormState )

  return (
    <AuthLayout>
      <>
        <RegisterAside />
      </>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center w-full h-full lg:w-11/12 lg:items-start lg:justify-end gap-3">

        <div className="flex flex-col w-full lg:-mb-7">

          <div className="w-full mb-4">
            <Title title="Registro" className="flex" />
          </div>
              
          <div className="flex lg:flex-row w-full lg:space-x-6 lg:mb-14" >

            <RegisterName 
              id="userName"
              title="Nombre" 
              placeholder="Nombre"
              name="nameUser" 
              value={input.nameUser}
              onChange={handleInputChange}
              className="w-full lg:w-[300px]"
            />

            <RegisterName 
              id="surnameUser"
              title="Apellidos" 
              placeholder="Primer y Segundo Apellido" 
              name="surnameUser"
              value={input.surnameUser}
              onChange={handleInputChange}
              className="w-full"
            />

          </div>
        </div>

        <div className="w-full lg:-mt-5">

          <PhoneSelect
            id="phone" 
            type="tel" 
            placeholder="Teléfono móvil"
            name="phone"
            value={input.phone}
            onChange={handleInputChange}
            className={`${registerError.phone ? 'focus-within:ring-red-500 border-red-500 focus-within:border-red-500 ' : ' mt-1.5 focus-within:border-violeta-100  focus-within:ring-violeta-100 '}`}
          />

        </div>

        <div className="flex flex-col w-full mt-6">

          <RegisterOptional />
          <article className="flex items-center mt-2">

            <Switch 
              onChange={handleSwitchChange}
            />
            <RegisterAtivate />
          </article>
        </div>

        <div className="w-full ">

          <Title title="Usuario" className="mb-4"/>

          <UserInput
            id="email" 
            type="email" 
            title="Email" 
            placeholder="ejemplo@gmail.com" 
            name="email"
            value={input.email}
            onChange={handleInputChange}
            className={`w-[400px] h-[2.4rem] border-blue-gray-100 bg-neutral-gray ${registerError.email ? 'outline-red-500 border-red-500 ' : 'outline-violeta-100 '}`}
          />

          <UserInput
            id="password" 
            type="password" 
            title="Contraseña" 
            placeholder="********"
            name="password" 
            value={input.password}
            onChange={handleInputChange}
            className={`w-[400px] h-[2.5rem]  border-blue-gray-100 ${registerError.password ? 'outline-red-500 border-red-500' : 'outline-violeta-100'}`} 
            positionStyles="right-4 top-[70%]"
          />
          <Note className={`${registerError.password ? 'text-red-500' : 'text-blue-gray-500'} transition-colors duration-200`}/>

        </div>

        <div className="w-full">

          <AgreementCheckbox 
            id="blocked" 
            type="checkbox" 
            name="blocked"
            onChange={handleInputChange}
          />

          <PrimaryButton label="Registrarse" className="w-full bg-celeste-100  hover:bg-[#3259e8]" />

        </div>
      </form>
    </AuthLayout>
  )
}

export default Register