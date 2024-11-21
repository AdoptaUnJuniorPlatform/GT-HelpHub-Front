import { useChatContext } from "../context/ChatContext"
import ProfileImg from "./ProfileImg"

function InboxRequest() {
  const {handleOpenRequestTabClick} = useChatContext();
  return (
    <div 
      onClick={handleOpenRequestTabClick}
      className="flex justify-start items-center gap-5 w-full h-[8rem] px-7 cursor-pointer bg-violeta-100">
      <ProfileImg 
        className="w-[59px] h-[59px] rounded-full overflow-hidden"
        src="https://i.pinimg.com/736x/d3/26/8d/d3268d71b337419741c93100b9b994f5.jpg"
      />
      <div className="flex flex-col text-white gap-1">
        <p className="text-xl leading-6 tracking-wide font-medium">Solicitud</p>
        <p className="text-xl leading-6 tracking-wide font-medium">Jorge Quintero</p>
      </div>
    </div>
  )
}

export default InboxRequest