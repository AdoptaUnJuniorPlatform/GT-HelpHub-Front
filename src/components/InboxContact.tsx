import ProfileImg from "./ProfileImg"

function InboxContact() {
  return (
    <div className="flex justify-start items-center gap-5 w-full h-[8rem] px-7 cursor-pointer">
      <ProfileImg 
        className="w-[59px] h-[59px] rounded-full overflow-hidden"
        src="https://i.pinimg.com/736x/d2/54/d9/d254d9cfca7c55d54020c02ed217c995.jpg"
      />
      <div className="flex flex-col">
        <p className="text-xl text-neutral-black leading-6 tracking-wide font-medium">Lidia Soriano</p>
        <p className="text-base text-black-80 font-normal leading-6 tracking-wide">Muchas Gracias</p>
      </div>
    </div>
  )
}

export default InboxContact