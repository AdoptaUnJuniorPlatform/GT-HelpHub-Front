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
import Welcome from "../components/Welcome"

function Register() {
  return (
    <>
      <main className="flex justify-center items-center w-screen min-h-screen">
        <div className="flex flex-col lg:flex-row lg:justify-around w-10/12 lg:h-auto h-full">

          <Welcome />

          <section className="flex flex-col items-center justify-center pt-14 lg:ml-32  w-full lg:items-start lg:justify-between">

            <div className="flex md:ml-0 lg:ml-0 flex-col w-full lg:-mb-7">
              <div className="w-full mb-6">
                <Title title="Registro" className="flex" />
              </div>
              <div className="flex lg:flex-row w-full lg:space-x-6 mb-6" >

                <RegisterName 
                  title="Nombre" 
                  placeholder="Nombre" 
                  className="w-full lg:w-[300px]"
                />

                <RegisterName 
                  title="Apellidos" 
                  placeholder="Apellidos" 
                  className="w-full lg:w-[450px] "
                />

              </div>
            </div>

            <div className="w-full lg:-mt-6">
              <PhoneSelect />
            </div>

            <div className="flex flex-col w-full mt-3">
              <RegisterOptional />
              <article className="flex items-center mt-3">
                <Switch />
                <RegisterAtivate />
              </article>
            </div>

            <div className="w-full mt-14 lg:-mt-5">
              <Title title="Usuario" className="pb-5"/>
              <UserInput type="email" title="Email" placeholder="ejemplo@gmail.com" />
              <UserInput type="password" title="Contraseña" placeholder="********" />
              <Note />
            </div>

            <div className="w-full ">
              <AgreementCheckbox type="checkbox" />
              <PrimaryButton label="Registrarse" className="w-full mt-3" />
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default Register