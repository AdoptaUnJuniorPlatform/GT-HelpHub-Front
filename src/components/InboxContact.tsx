import { InboxContactProps } from "../types/types";
import ProfileImg from "./ProfileImg"

function InboxContact({id, src, name, message, selected, setSelected}: InboxContactProps) {
  const isSelected = selected === id;
  return (
    <div 
      onClick={() => setSelected(id)}
      className={`flex justify-between items-center gap-4 w-full h-[8rem] px-7 cursor-pointer ${
        isSelected ? "bg-black-6 border-r-4 rounded-r-md border-violeta-100" : "bg-neutral-gray"
      }`}>
      <ProfileImg 
        className="w-[59px] h-[59px] rounded-full overflow-hidden shrink-0"
        src={src}
      />
      <div className="flex flex-col w-full">
        <p className="text-xl text-neutral-black leading-6 tracking-wide font-medium">{name}</p>
        <p className="text-base text-black-80 font-normal leading-6 tracking-wide">{message}</p>
      </div>

      <div className="flex justify-between w-auto">
        <span className="flex justify-center items-center w-[1.7rem] h-5 p-[10px] text-sm font-medium leading-6 tracking-wide text-center shrink-0  rounded-[20px] bg-celeste-100 text-white">1</span>
      </div>
    </div>
  )
}

export default InboxContact