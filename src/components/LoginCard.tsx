import CardLayout from "../layouts/CardLayout"
import { ProfileData } from "../types/types"
import CardAvailability from "./CardAvailability";
import CardDescription from "./CardDescription";
import CardHeader from "./CardHeader"
import CardInfo from "./CardInfo";
import CardSkills from "./CardSkills";

function LoginCard(props: { profileData: ProfileData }) {
  const { profileData } = props;
  const { photo, name, service, location, availability, description, skills } = profileData;
  return (
    <CardLayout>
      <CardHeader photo={photo} name={name} />
      <CardInfo service={service} location={location}/>
      <CardAvailability availability={availability} />
      <CardDescription description={description} />
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
    </CardLayout>
  )
}

export default LoginCard