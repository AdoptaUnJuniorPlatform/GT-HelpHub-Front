interface ProfileImgProps {
  profilePicture: string;
  className?: string;
}

function ProfileImg({ profilePicture, className }: ProfileImgProps) {
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