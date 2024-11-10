import BlueBorderBox from "./BlueBorderBox"
import GreenAlert from "./GreenAlert"
import NewAbility from "./NewAbility"

function Ability() {
  return (
    <main className="flex flex-col w-full font-roboto not-italic">
      <GreenAlert 
        title="Tienes 2 habilidades cargada"
        text="Carga más habilidades para seguir ampliando esta comunidad"
      />
      <h1 className="text-[34px] text-celeste-100 font-normal leading-normal tracking wide">Intercambio de habilidades</h1>
      <BlueBorderBox />
      <section>
        <NewAbility />
      </section>
    </main>
  )
}

export default Ability