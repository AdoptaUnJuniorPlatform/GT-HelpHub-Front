import { useState } from "react"
import ProfileImg from "../components/ProfileImg"
import Edit from "./Edit"
import UserAvailability from "./UserAvailability"
import UserDescription from "./UserDescription"
import UserInterestedSkills from "./UserInterestSkills"
import { useAuthContext } from "../context/AuthContext";

interface UserProfileProps {
  profile: {
    profilePicture: string;
    nameUser: string;
    surnameUser: string;
    preferredTimeRange: string;
    description: string;
    interestedSkills: string[];
  };
}

function UserProfile({ profile }: UserProfileProps) {
  const { userId } = useAuthContext();
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };
  
  return (
    <div className="flex flex-col w-full px-[6em] py-[2em] bg-[#F7F7F7]">
      <div className="flex justify-start items-start gap-10">
        <div className="flex flex-col items-center gap-9">
          <ProfileImg 
            userId={userId}
            className="w-[13.9rem] h-[13.9rem] rounded-lg overflow-hidden"
          />
          <h2 className="text-3xl font-medium leading-6 tracking-wide">{`${profile.nameUser} ${profile.surnameUser}`}</h2>
        </div>
        <div className="flex flex-col w-full gap-6">
          <div className="flex flex-col items-start">
            <h3 className="text-2xl font-normal leading-normal text-neutral-black mb-3">
              Disponibilidad horaria
            </h3>
            <UserAvailability preferredTimeRange={profile.preferredTimeRange}/> 
          </div>

          <div>
            <h3 className="text-2xl font-normal leading-normal text-neutral-black pb-4">
              Descripción
            </h3>
            <UserDescription description={profile.description} />
          </div>

          <div>
            <h3 className="text-2xl font-normal leading-normal text-neutral-black pb-2">
              Habilidades que me interesan
            </h3>
            <UserInterestedSkills 
              interestedSkills={profile.interestedSkills ?? []} 
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