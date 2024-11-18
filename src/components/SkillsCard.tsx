import { useAvilityContext } from "../context/AvilityContext";
import CardLayout from "../layouts/CardLayout"
import { SkillsCardProps } from "../types/AbilityServiceTypes";
import { levels } from "../Variables/varibles";
import CardAvailability from "./CardAvailability";
import CardBtnBorder from "./CardBtnBorder";
import CardBtnPrimary from "./CardBtnPrimary";
import CardDescription from "./CardDescription";
import CardInfo from "./CardInfo";
import CardLevel from "./CardLevel";
import CardSkills from "./CardSkills";

function SkillsCard(props: { profileData: SkillsCardProps; }) {
  const { profileData } = props;
  const { _id, title, description, level, category, location, availability, mode } = profileData;
  const { deleteHability } = useAvilityContext();

  const handleDeleteClick = () => {
    if (window.confirm(`¿Estás seguro de que quieres eliminar la habilidad: ${title}?`)) {
      deleteHability(_id);
    }
  };
  return (
    <CardLayout>
      <CardInfo service={title} location={location} mode={mode}/>
      <CardLevel levels={levels} activeLevel={level}/>
      <CardAvailability availability={availability} />
      <CardDescription description={description} />
      <div className="border-b border-[rgba(174,174,174,0.10)] w-full">
        <CardSkills>
          {category.map((ctgry) => (
            <span
              key={_id}
              className="flex justify-center items-center px-3 py-1 h-[1.4rem] text-[12px] border border-black-80 rounded-full text-sm text-black-80"
            >
              {ctgry}
            </span>
          ))}
        </CardSkills>
      </div>
      <div className="flex gap-2 text-[0.9em] justify-start items-center w-full px-4 pt-4">
        <CardBtnBorder  
          label="Borrar" 
          className="border-2"
          onClick={handleDeleteClick}
        />
        <CardBtnPrimary label="Editar" className="w-[5rem]"/>
      </div>
    </CardLayout>
  )
}

export default SkillsCard