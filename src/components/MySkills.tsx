import { useNavigate } from "react-router-dom"
import SecondaryButton from "./SecondaryButton"
import SkillsCard from "./SkillsCard"
import { useAvilityContext } from "../context/AvilityContext"
import { useProfileContext } from "../context/ProfileContext"

function MySkills() {
  const {userHabilities = { habilities: [] }, setShowEditor } = useAvilityContext();
  const { profile } = useProfileContext();
  const navigate = useNavigate();

  const combinedDataArray = userHabilities?.habilities.map((userHability) => ({
    ...userHability,
    location: profile?.location ?? "Ubicación no disponible",
    availability: profile?.preferredTimeRange ?? "Disponible", 
  }));
  
  const handleButtonClick = () => {
    console.log("cambiando");
    setShowEditor(true);
    navigate("/profile/editar-habilidades");
  };
  return (
    <>
      <div className="flex justify-between items-center w-full mt-20">
        <h2 className="text-[32px] font-medium tracking-wide leading-6 text-neutral-black">Mis habilidades</h2>
        <SecondaryButton 
          label="Nueva habilidad"
          onClick={handleButtonClick}
        />
      </div>
      <div className="flex w-full">
        <div className="flex flex-wrap gap-8 mt-10 w-full">
          {combinedDataArray?.map((data) => (
            <SkillsCard key={data._id} profileData={data} />
          ))}
        </div>
      </div>
    </>
  )
}

export default MySkills