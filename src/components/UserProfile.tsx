import { useState } from "react"
import ProfileImg from "../components/ProfileImg"
import { profiles } from "../Variables/varibles"
import Edit from "./Edit"
import UserAvailability from "./UserAvailability"
import UserDescription from "./UserDescription"
import UserInterestSkills from "./UserInterestSkills"

function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const user = profiles[0];

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };
  
  return (
    <div className="flex flex-col w-full px-[6em] py-[2em] bg-[#F7F7F7]">
      <div className="flex justify-start items-start gap-10">
        <div className="flex flex-col items-center gap-9">
          <ProfileImg 
            src={user.photo} 
            className="w-[13.9rem] h-[13.9rem] rounded-lg overflow-hidden"
          />
          <h2 className="text-3xl font-medium leading-6 tracking-wide">{user.name}</h2>
        </div>
        <div className="flex flex-col w-full gap-6">
          <div className="flex flex-col items-start">
            <h3 className="text-2xl font-normal leading-normal text-neutral-black mb-3">
              Disponibilidad horaria
            </h3>
            <UserAvailability /> 
          </div>

          <div>
            <h3 className="text-2xl font-normal leading-normal text-neutral-black pb-4">
              Descripción
            </h3>
            <UserDescription />
          </div>

          <div>
            <h3 className="text-2xl font-normal leading-normal text-neutral-black pb-2">
              Habilidades que me interesan
            </h3>
            <UserInterestSkills 
              interestSkills={user.interestSkills ?? []} 
              isEditing={isEditing}/>
          </div>
        </div>
        <Edit 
          onClick={toggleEdit}
        />
      </div>
    </div>
  );
}
  
export default UserProfile;