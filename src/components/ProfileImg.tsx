import { useProfileImage } from "../hooks/useProfileImage";

interface ProfileImgProps {
  userId: string;
  className?: string;
}

function ProfileImg({ userId, className }: ProfileImgProps) {
  const { profilePicture } = useProfileImage(userId);
  return (
    <div className={className}>
      <img
        src={profilePicture}
        alt="Perfil"
        className={`w-full h-full object-cover`}
      />      
    </div>
  )
}
  
export default ProfileImg;