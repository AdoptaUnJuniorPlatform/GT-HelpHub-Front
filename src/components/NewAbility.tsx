import { BsFillQuestionCircleFill } from "react-icons/bs"
import { categories, levels, modes } from "../Variables/varibles"
import CharacterCountTextArea from "./CharacterCountTextArea"
import RadioSelector from "./RadioButtons"
import FilterDrop from "./FilterDrop"

function NewAbility() {
  
  return (
    <div className="flex flex-col justify-evenly bg-neutral-gray w-7/12 h-[73rem] p-10">

      <div className="flex flex-col w-ful -mt-7">
        <h1 className="text-[34px] text-neutral-black font-normal leading-normal tracking-wide">Nueva Habilidad</h1>
        <p className="text-lg text-neutral-black text-neautral-gray font-normal leading-normal">Puedes cargar múltiples habilidades y siempre puedes cambiarlas o editarlas más tarde.</p>
      </div>

      <div className="flex flex-col w-ful">
        <h3 className="text-2xl text-neutral-black font-normal leading-normal">Escribe el título de tu publicación</h3>
        <CharacterCountTextArea 
          placeholder="Ej: Pintar óleo"
          showLabel={false}
          className="h-[3.2rem] leading-[2.9rem]"
        />
        <p className="text-base text-neutral-black font-normal leading-normal tracking-[0.0px] underline mt-2">Ideas para crear tu título</p>
      </div>

      <div className="flex flex-col mt-5">
        <h2 className="text-2xl text-neutral-black font-normal leading-normal mb-3">Nivel</h2>
        <RadioSelector options={levels}/>
      </div>

      <div className="flex flex-col w-full mt-7">
        <div className="flex w-full items-center gap-3">
          <h2 className="text-2xl text-neutral-black font-normal leading-normal mb-3">Modalidad</h2>
          <span className="text-sm text-black-50 mb-3">
            <BsFillQuestionCircleFill />
          </span>
        </div>
        <RadioSelector options={modes} />
      </div>
      <div className="flex flex-col">
      </div>

      <div className="flex flex-col wifull">
        <h2 className="text-2xl text-neutral-black font-normal leading-normal mb-5">¿Qué ofreces?</h2>
        <CharacterCountTextArea 
          placeholder="Escribe una pequeña descripción de tus habilidades"
          showLabel={true}
          className="w-full h-[11.3rem] p-4 border border-gray-300 rounded-md bg-[#FAFAFA]"
        />
        <p className="text-base text-neutral-black font-normal leading-normal tracking-[0.0px] underline mt-2">Consejos para generar un texto llamativo</p>
      </div>

      <div className="flex flex-col w-full">
        <h2 className="text-2xl text-neutral-black font-normal leading-normal">¿Qué categoría se ajusta mejor a tu habilidad?</h2>
        <FilterDrop
          placeholder="Categorías"
          options={categories}
          onSelect={() => {}}
          className="w-full"
        />
      </div>

    </div>
  )
}

export default NewAbility