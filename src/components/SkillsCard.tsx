import CardLayout from "../layouts/CardLayout"
import { ProfileData } from "../types/types"
import CardAvailability from "./CardAvailability";
import CardBtnBorder from "./CardBtnBorder";
import CardBtnPrimary from "./CardBtnPrimary";
import CardDescription from "./CardDescription";
import CardInfo from "./CardInfo";
import CardLevel from "./CardLevel";
import CardSkills from "./CardSkills";


function SkillsCard(props: { profileData: ProfileData }) {
  const { profileData } = props;
  const { service, location, levels, availability, description, skills } = profileData;
  return (
    <CardLayout>

      <CardInfo service={service} location={location} />
      <CardLevel levels={levels} />
      <CardAvailability availability={availability} />
      <CardDescription description={description} />
      <div className="border-b border-[rgba(174,174,174,0.10)] w-full">
        <CardSkills>
          {skills.map((skill, index) => (
            <span
              key={index}
              className="flex justify-center items-center px-3 py-1 h-[1.4rem] text-[12px] border border-black-80 rounded-full text-sm text-black-80"
            >
              {skill}
            </span>
          ))}
        </CardSkills>
      </div>
      <div className="flex gap-2 text-[0.9em] justify-start items-center w-full px-4 pt-4">
        <CardBtnBorder  label="Borrar" className="border-2"/>
        <CardBtnPrimary label="Editar" className="w-[5rem]"/>
      </div>

    </CardLayout>

  )
}

export default SkillsCard