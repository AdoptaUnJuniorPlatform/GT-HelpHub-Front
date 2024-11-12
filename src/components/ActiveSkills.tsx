import { profiles } from "../Variables/varibles"
import BackButton from "./BackButton"
import NextButton from "./NextButton"
import SkillsCard from "./SkillsCard"

function ActiveSkills() {
  return (
    <div className="flex flex-col w-5/12 h-auto justify-start items-baseline pl-16 py-10 gap-10">
      <h1 className="text-[32px] text-neutral-black font-medium leading-6 tracking-wide">Mis habilidades activas:</h1>
      {profiles.slice(0, 2).map((profile, index) => (
        <SkillsCard key={index} profileData={profile} />
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