
function ProfileImg({ src, className }: { src: string, className?: string }) {
  return (
    <div className={className}>
      <img
        src={src}
        alt="Perfil"
        className={`w-full h-full object-cover`}
      />      
    </div>
  )
}
  
export default ProfileImg;