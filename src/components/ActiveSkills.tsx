import { useAvilityContext } from "../context/AvilityContext"
import { useProfileContext } from "../context/ProfileContext";
import BackButton from "./BackButton"
import NextButton from "./NextButton"
import SkillsCard from "./SkillsCard"

function ActiveSkills() {
  const {userHabilities = { habilities: [] }} = useAvilityContext();
  const { profile } = useProfileContext();
 
  const combinedDataArray = userHabilities?.habilities.map((userHability) => ({
    ...userHability,
    location: profile?.location ?? "Ubicación no disponible",
    availability: profile?.preferredTimeRange ?? "Disponible", 
  }));

  console.log('Renderizando habilidades activas:', combinedDataArray);
  return (
    <div className="flex flex-col w-5/12 h-auto justify-start items-baseline pl-16 py-10 gap-10">
      <h1 className="text-[32px] text-neutral-black font-medium leading-6 tracking-wide">Mis habilidades activas:</h1>
      {combinedDataArray?.map((data, index) => (
        <SkillsCard key={`${data._id}-${index}`} profileData={data} />
      ))}
      <div className="flex w-7/12 justify-evenly pt-16 gap-4">
        <BackButton 
          type="button" 
          label="CANCELAR"
          className="text-black-50"
        />
        <NextButton 
          type="submit" 
          label="GUARDAR"
          className="text-celeste-100 opacity-100"
        />
      </div>
    </div>
  )
}

export default ActiveSkills