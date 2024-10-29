import { profiles } from "../Variables/varibles"
import ProfileCard from "./ProfileCard"
import SecondaryButton from "./SecondaryButton"

function MySkills() {
  return (
    <>

      <div className="flex justify-between items-center w-full mt-10">
        <h2 className="text-[32px] font-medium tracking-wide leading-6 text-neutral-black">Mis habilidades</h2>
        <SecondaryButton label="Nueva habilidad" className="mt-10"/>
      </div>
      <div className="flex w-full">
        <div className="flex flex-wrap gap-8 mt-10 w-full">
          {profiles.map((profile, index) => (
            <ProfileCard key={index} profileData={profile} />
          ))}
        </div>
      </div>
    </>
  )
}

export default MySkills