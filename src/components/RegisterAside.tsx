
function RegisterAside() {
  return (
    <aside className="flex justify-center items-center w-full lg:w-[600px] lg:h-[90vh] sm:h-[95vh] bg-violeta-100 flex-shrink-0 text-white p-4 lg:p-0 
  rounded-b-[40px] lg:rounded-l-[40px] lg:rounded-b-none">
      <section className="flex flex-col justify-between items-center lg:items-start w-full lg:w-[72%] h-full lg:h-[70%] lg:ml-[70px] lg:-mt-8">

        <div className="w-3/4 sm:flex sm:justify-center lg:w-auto">
          <img src="../src/assets/HelpHubFull.svg" alt="HelpHub Logo" className="max-w-full h-auto sm:h-[70px] lg:h-24" />
        </div>

        <div className="flex flex-col text-center lg:text-left mt-6 lg:mt-0">
          <h1 className="text-4xl lg:text-6xl font-normal">Bienvenido a la comunidad</h1>
          <h2 className="text-xl lg:text-2xl leading-normal font-normal lg:mt-2">Comparte, aprende, crece</h2>
        </div>

        <div className="text-lg lg:text-2xl font-normal mt-6 lg:mt-0 text-center lg:text-left">
          <p className="leading-normal font-normal">¡Empieza a intercambiar ya!</p>
          <p className="mt-2 w-full lg:w-[378px]">Regístrate gratis y descubre un mundo de posibilidades.</p>
        </div>

        <div className="flex flex-col lg:flex-row w-full mt-6 lg:-mt-3 justify-center lg:justify-start items-center lg:items-start font-normal">
          <p className="font-normal">¿Ya tienes una cuenta?</p>
          <a href="#" className="underline font-normal mt-2 lg:mt-0 lg:ml-6">Ingresar</a>
        </div>
      </section>
    </aside>
  )
}

export default RegisterAside