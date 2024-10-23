import { useState } from "react";
import { ProfileData } from "../types/types";
import CardAvailability from "./CardAvailability";
import CardDescription from "./CardDescription";
import CardHeader from "./CardHeader";
import CardInfo from "./CardInfo";
import CardLevel from "./CardLevel";
import CardSkills from "./CardSkills";
import SeeMore from "./SeeMore";
import CardBtnMore from "./CardBtnMore";
import CardBtnExchange from "./CardBtnExchange";

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
    <div className="flex flex-col items-start w-[21rem] py-4 rounded-md bg-[#FBFBFF] shadow-[0_3px_6px_0_rgba(0,0,0,0.25)] font-roboto text-neutral-black">
      <CardHeader photo={photo} name={name} />
      <CardInfo service={service} location={location} />
      <CardLevel levels={levels} />
      <CardAvailability availability={availability} />
      <CardDescription description={description} />
      <CardSkills skills={skills} />
      <div className="flex gap-2 text-[0.9em] justify-end w-full px-4 py-4">
        <CardBtnMore onClick={handleOpen} id={id}/>
        <CardBtnExchange label="Solicitar intercambio" className="h-10 w-[10.5rem]"/>
      </div>
      <SeeMore isOpen={open} onClose={handleClose} profileData={profileData}/>
    </div>
  );
}

export default Card