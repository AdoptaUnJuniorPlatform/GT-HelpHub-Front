import Article from "./Article"
import Logo from "./Logo"

function Footer() {
  return (
    <footer className="w-full mt-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-start justify-between py-12 px-8 lg:px-40 bg-[#F6F5F4]">

      <section className="flex flex-col gap-4 max-w-xs">
        <Logo className="" />
        <Article 
          className="text-gray-600"
          text="Help Hub es una plataforma que te permite intercambiar habilidades con personas de todo el mundo. Comparte tu conocimiento y expande tus horizontes con cada intercambio."
        />
        <p className="font-medium text-base text-gray-700">
          Intercambia y aprende sin límites
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <p className="text-[#375ada] text-base mb-2">Recursos</p>
        <Article text="Catálogo de habilidades" className="text-gray-600 cursor-pointer hover:text-[#375ada] hover:underline" />
        <Article text="Formulario y reportes" className="text-gray-600 cursor-pointer hover:text-[#375ada] hover:underline" />
        <Article text="Preguntas frecuentes" className="text-gray-600 cursor-pointer hover:text-[#375ada] hover:underline" />
      </section>

      <section className="flex flex-col gap-2">
        <p className="text-[#375ada] text-base mb-2">Legal</p>
        <Article text="Condiciones de uso" className="text-gray-600 cursor-pointer hover:text-[#375ada] hover:underline" />
        <Article text="Política de privacidad" className="text-gray-600 cursor-pointer hover:text-[#375ada] hover:underline" />
        <p className="text-[#375ada] text-base mt-4">Contacto</p>
        <Article text="helphubl@gmail.com" className="text-gray-600" />
      </section>

      <section className="flex flex-col gap-2">
        <p className="text-[#375ada] text-base">Derechos de autor:</p>
        <Article 
          text="© 2024 Help Hub. Todos los derechos reservados."
          className="text-gray-600"
        />
      </section>

    </footer>


  )
}

export default Footer