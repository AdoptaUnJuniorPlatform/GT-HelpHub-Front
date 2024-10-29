import { useState } from "react";
import { ProfileData } from "../types/types";
import CardAvailability from "./CardAvailability";
import CardDescription from "./CardDescription";
import CardHeader from "./CardHeader";
import CardInfo from "./CardInfo";
import CardLevel from "./CardLevel";
import CardSkills from "./CardSkills";
import SeeMore from "./SeeMore";
import CardLayout from "../layouts/CardLayout";
import CardBtnBorder from "./CardBtnBorder";
import CardBtnPrimary from "./CardBtnPrimary";

function Card(props: { profileData: ProfileData }) {
  const { profileData } = props;
  const { id, photo, name, service, location, levels, availability, description, skills } = profileData;

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <CardLayout>
      <CardHeader photo={photo} name={name} />
      <CardInfo service={service} location={location} />
      <CardLevel levels={levels} />
      <CardAvailability availability={availability} />
      <CardDescription description={description} />
      <CardSkills skills={skills} />
      <div className="flex gap-2 text-[0.9em] justify-end w-full px-4 py-4">
        <CardBtnBorder 
          label="Ver más" 
          onClick={handleOpen} 
          id={id} 
          className="w-[6rem]"
        />
        <CardBtnPrimary 
          label="Solicitar intercambio" 
          className="w-[10.5rem]"
        />
      </div>
      <SeeMore 
        isOpen={open} 
        onClose={handleClose} 
        profileData={profileData}
      />
    </CardLayout>

  );
}

export default Card