import { BsFillQuestionCircleFill } from "react-icons/bs"
import { categories, levels, modes } from "../Variables/varibles"
import CharacterCountTextArea from "./CharacterCountTextArea"
import RadioSelector from "./RadioButtons"
import FilterDrop from "./FilterDrop"
import UseSelect from "../hooks/UseSelect"
import useForm from "../hooks/useForm"
import { createHability, editHability, getHability } from "../services/AbilityService"
import ActiveSkills from "./ActiveSkills"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { HabilityErrorResponse, HabilityRequest, HabilityResponse } from "../types/AbilityServiceTypes"
import { useAvilityContext } from "../context/AvilityContext"

function NewAbility() {
  const { id } = useParams<{ id: string }>();
  const {setUserHabilities} = useAvilityContext();
  const initialState = {
    title: "",
    level: "",
    mode: "",
    description: "",
    category: []
  }
  const [info, setInfo] = useState<HabilityRequest>(initialState);

  useEffect(() => {
    if (info) {
      setInput(info);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [info]);

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const response = await getHability(id);
          setInfo({
            title: response.title,
            level: response.level,
            mode: response.mode,
            description: response.description,
            category: response.category,
          });
        } catch (error) {
          console.error("Error al cargar la habilidad:", error);
        }
      };

      fetchData();
    }
  }, [id]);
  
  const sendData = async () => {
    console.log('Data to send to backend:', {
      ...input,
    });
    try {
      let response: string | HabilityResponse | HabilityErrorResponse;

      if (id) {
        response = await editHability(id, input);
      } else {
        response = await createHability({
          ...input
        });
      }

      if (typeof response === "string" ) {
        console.log("Operación exitosa:", response);
        alert("Habilidad editada exitosamente.");
      } else if ("error" in response) {
        console.error("Error en la operación:", response.error);
        alert(`Error: ${response.error}`);
      } else {
        alert("Habilidad creada exitosamente")
        setUserHabilities((prev) => {
          console.log("Estado previo:", prev);
        
          const updatedHabilities = id
            ? (prev?.habilities || []).map((hability) =>
              hability._id === id ? { ...hability, ...input } : hability
            )
            : [...(prev?.habilities || []), response];
        
          return { habilities: updatedHabilities };
        });
        setInput(initialState)
      }
    } catch (error) {
      console.error("Error al procesar la habilidad:", error);
      alert("Hubo un error al procesar la habilidad. Intenta nuevamente.");
    }
  }

  const { handleSubmit, handleCategorySelectChange, handleInputChange, input, setInput } = useForm(sendData, info);
  const { handleCategorySelect, selectedCategory } = UseSelect({ handleCategorySelectChange });
  return (
    <form 
      onSubmit={handleSubmit}
      className="flex w-full gap-10">
      <div 
        className="flex flex-col justify-evenly bg-neutral-gray h-[73rem] p-10">

        <div className="flex flex-col w-ful -mt-7">
          <h1 className="text-[34px] text-neutral-black font-normal leading-normal tracking-wide">Nueva Habilidad</h1>
          <p className="text-lg text-neutral-black text-neautral-gray font-normal leading-normal">Puedes cargar múltiples habilidades y siempre puedes cambiarlas o editarlas más tarde.</p>
        </div>

        <div className="flex flex-col w-ful">
          <h3 className="text-2xl text-neutral-black font-normal leading-normal">Escribe el título de tu publicación</h3>
          <CharacterCountTextArea
            id="title"
            name="title"
            value={input.title}
            onChange={handleInputChange}
            placeholder="Ej: Pintar óleo"
            showLabel={false}
            className="h-[3.2rem] leading-[2.9rem]"
          />
          <p className="text-base text-neutral-black font-normal leading-normal tracking-[0.0px] underline mt-2">Ideas para crear tu título</p>
        </div>

        <div className="flex flex-col mt-5">
          <h2 className="text-2xl text-neutral-black font-normal leading-normal mb-3">Nivel</h2>
          <RadioSelector 
            name="level"
            value={input.level}
            options={levels}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex flex-col w-full mt-7">
          <div className="flex w-full items-center gap-3">
            <h2 className="text-2xl text-neutral-black font-normal leading-normal mb-3">Modalidad</h2>
            <span className="text-sm text-black-50 mb-3">
              <BsFillQuestionCircleFill />
            </span>
          </div>
          <RadioSelector 
            name="mode"
            value={input.mode}
            options={modes} 
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
        </div>

        <div className="flex flex-col wifull">
          <h2 className="text-2xl text-neutral-black font-normal leading-normal mb-5">¿Qué ofreces?</h2>
          <CharacterCountTextArea 
            id="description"
            name="description"
            value={input.description}
            onChange={handleInputChange}
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
            onSelect={handleCategorySelect}
            selectedOption={selectedCategory}
            className="w-full"
          />
        </div>
      </div>
      <ActiveSkills />
    </form>
  )
}

export default NewAbility