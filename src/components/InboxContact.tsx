import { InboxContactProps } from "../types/types";
import ProfileImg from "./ProfileImg"

function InboxContact({id, src, name, message, selected, setSelected}: InboxContactProps) {
  const isSelected = selected === id;
  return (
    <div 
      onClick={() => setSelected(id)}
      className={`flex justify-start items-center gap-5 w-full h-[8rem] px-7 cursor-pointer ${
        isSelected ? "bg-black-6 border-r-4 rounded-r-md border-violeta-100" : "bg-neutral-gray"
      }`}>
      <ProfileImg 
        className="w-[59px] h-[59px] rounded-full overflow-hidden"
        src={src}
      />
      <div className="flex flex-col">
        <p className="text-xl text-neutral-black leading-6 tracking-wide font-medium">{name}</p>
        <p className="text-base text-black-80 font-normal leading-6 tracking-wide">{message}</p>
      </div>
    </div>
  )
}

export default InboxContact