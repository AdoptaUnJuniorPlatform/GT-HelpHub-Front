import CardLayout from "../layouts/CardLayout"
import { ProfileData } from "../types/types"
import CardAvailability from "./CardAvailability";
import CardBtnBorder from "./CardBtnBorder";
import CardBtnPrimary from "./CardBtnPrimary";
import CardDescription from "./CardDescription";
import CardInfo from "./CardInfo";
import CardLevel from "./CardLevel";
import CardSkills from "./CardSkills";


function ProfileCard(props: { profileData: ProfileData }) {
  const { profileData } = props;
  const { service, location, levels, availability, description, skills } = profileData;
  return (
    <CardLayout>

      <CardInfo service={service} location={location} />
      <CardLevel levels={levels} />
      <CardAvailability availability={availability} />
      <CardDescription description={description} />
      <CardSkills skills={skills} />
      <div className="flex gap-2 text-[0.9em] justify-start items-center w-full px-4 pt-4">
        <CardBtnBorder  label="Borrar" className="border-2"/>
        <CardBtnPrimary label="Editar" className="w-[5rem]"/>
      </div>

    </CardLayout>

  )
}

export default ProfileCard