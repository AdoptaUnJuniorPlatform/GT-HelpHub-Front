import PhoneSelect from "../components/PhoneSelect"
import AgreementCheckbox from "../components/AgreementCheckbox"
import Note from "../components/Note"
import PrimaryButton from "../components/PrimaryButton"
import RegisterAtivate from "../components/RegisterAtivate"
import RegisterName from "../components/RegisterName"
import RegisterOptional from "../components/RegisterOptional"
import Switch from "../components/Switch"
import Title from "../components/Title"
import UserInput from "../components/UserInput"
import RegisterAside from "../components/RegisterAside"
import useForm from "../hooks/useForm"
import { RegisterFormData } from "../types/types"
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();


  const sendData = (data: RegisterFormData) => {
  
    const phoneWithPrefix = data.phone ? `+34${data.phone}` : '';
  
    const updatedData = {
      ...data,
      phone: phoneWithPrefix,
    };
    console.log(updatedData);

    navigate('/codigo-seguridad');
  };

  const { input, handleInputChange, handleSwitchChange, handleSubmit } = useForm(sendData, {
    email: '',
    password: '',
    nameUser: '',
    surnameUser: '',
    phone: '',
    optionCall: false,
    showPhone: false,
    blockemailed: false
  })

  return (
    <>
      <main className="flex justify-center items-center w-screen min-h-screen lg:min-h-[100vh]">
        <div className="flex flex-col lg:flex-row lg:justify-around w-11/12 lg:h-auto h-full">

          <RegisterAside />

          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center mt-9 lg:ml-28 w-full lg:w-10/12 lg:items-start lg:justify-between">

            <div className="flex md:ml-0 lg:ml-0 flex-col w-full lg:-mb-7">

              <div className="w-full mb-3">
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
                  placeholder="Apellidos" 
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

              <Title title="Usuario" className="pb-2"/>

              <UserInput
                id="email" 
                type="email" 
                title="Email" 
                placeholder="ejemplo@gmail.com" 
                name="email"
                value={input.email}
                onChange={handleInputChange}
                className="w-[400px] h-[2.4rem]  border-blue-gray-100"
              />

              <UserInput
                id="password" 
                type="password" 
                title="Contraseña" 
                placeholder="********"
                name="password" 
                value={input.password}
                onChange={handleInputChange}
                className="w-[400px] h-[2.5rem]  border-blue-gray-100" 
                positionStyles="right-4 top-[70%]"
              />

              <Note />

            </div>

            <div className="w-full mt-8">

              <AgreementCheckbox 
                id="blockemailed" 
                type="checkbox" 
                name="blockemailed"
                checked={input.blockemailed}
                onChange={handleInputChange}
              />

              <PrimaryButton label="Registrarse" className="w-full  hover:bg-[#3259e8]" />

            </div>
          </form>
        </div>
      </main>
    </>
  )
}

export default Register