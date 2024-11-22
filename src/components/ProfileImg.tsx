import { useProfileImage } from "../hooks/useProfileImage";

interface ProfileImgProps {
  userId: string | null; 
  className?: string; 
}

const ProfileImg: React.FC<ProfileImgProps> = ({ userId, className }) => {
  const { profilePicture } = useProfileImage(userId);

  return (
    <div className={className}>
      <img
        src={profilePicture || "/images/default-placeholder.png"}
        alt="Imagen de perfil"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ProfileImg;
