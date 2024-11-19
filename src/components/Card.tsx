// import { useState } from "react";
import CardAvailability from "./CardAvailability";
import CardDescription from "./CardDescription";
import CardHeader from "./CardHeader";
import CardInfo from "./CardInfo";
import CardLevel from "./CardLevel";
import CardSkills from "./CardSkills";
// import SeeMore from "./SeeMore";
import CardLayout from "../layouts/CardLayout";
import CardBtnBorder from "./CardBtnBorder";
import CardBtnPrimary from "./CardBtnPrimary";
import { CardProps } from "../types/AbilityServiceTypes";
import { levels } from "../Variables/varibles";

function Card(props: { profileData: CardProps }) {
  const { profileData } = props;
  const { _id, profilePicture, userFullName, category, location, level, availability, description, title, mode } = profileData;

  // const [open, setOpen] = useState(false);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };
  return (
    <CardLayout>
      <CardHeader photo={profilePicture} name={userFullName} />
      <CardInfo service={title} location={location} mode={mode} />
      <CardLevel levels={levels} activeLevel={level}/>
      <CardAvailability availability={availability} />
      <CardDescription description={description} />
      <div className="border-b border-[rgba(174,174,174,0.10)] w-full">
        <CardSkills>
          {category.map((ctgry, index) => (
            <span
              key={`${category}-${_id}-${index}`}
              className="flex justify-center items-center px-3 py-1 h-[1.4rem] text-[12px] border border-black-80 rounded-full text-sm text-black-80"
            >
              {ctgry}
            </span>
          ))}
        </CardSkills>
      </div>
      <div className="flex gap-2 text-[0.9em] justify-end w-full px-4 py-4">
        <CardBtnBorder 
          label="Ver más" 
          // onClick={handleOpen} 
          id={_id} 
          className="w-[6rem]"
        />
        <CardBtnPrimary 
          label="Solicitar intercambio" 
          className="w-[10.5rem]"
        />
      </div>
      {/* <SeeMore 
        isOpen={open} 
        onClose={handleClose} 
        profileData={profileData}
      /> */}
    </CardLayout>

  );
}

export default Card