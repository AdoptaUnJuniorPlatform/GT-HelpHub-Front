import { useAvilityContext } from "../context/AvilityContext"
import BlueBorderBox from "./BlueBorderBox"
import GreenAlert from "./GreenAlert"
import NewAbility from "./NewAbility"

function Ability() {
  const {userHabilities} = useAvilityContext();
  const number = userHabilities?.habilities.length
  return (
    <main className="flex flex-col w-full font-roboto not-italic">
      <section className="pt-10 pb-16">
        <GreenAlert 
          title={`Tienes ${number} ${number === 1 ? "habilidad cargada" : "habilidades cargadas"}`}
          text="Carga más habilidades para seguir ampliando esta comunidad"
        />
        <div className="pt-8">
          <h1 className="text-[34px] text-celeste-100 font-normal leading-normal tracking wide pb-3">Intercambio de habilidades</h1>
          <BlueBorderBox />
        </div>
      </section>
      <div>
        <NewAbility />
      </div>
    </main>
  )
}

export default Ability