import { profiles } from "../Variables/varibles"
import SecondaryButton from "./SecondaryButton"
import SkillsCard from "./SkillsCard"

function MySkills() {
  return (
    <>
      <div className="flex justify-between items-center w-full mt-20">
        <h2 className="text-[32px] font-medium tracking-wide leading-6 text-neutral-black">Mis habilidades</h2>
        <SecondaryButton label="Nueva habilidad"/>
      </div>
      <div className="flex w-full">
        <div className="flex flex-wrap gap-8 mt-10 w-full">
          {profiles.map((profile, index) => (
            <SkillsCard key={index} profileData={profile} />
          ))}
        </div>
      </div>
    </>
  )
}

export default MySkills