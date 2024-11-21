import { TbRefresh } from "react-icons/tb"
import ProfileImg from "./ProfileImg"
import PrimaryButton from "./PrimaryButton"

function ChatBoxHeader() {
  return (
    <div className="flex items-center justify-between border-b-[1px] border-black-50 py-5 px-10">
      <div className="flex items-center gap-10">
        <ProfileImg 
          className="w-[73px] h-[73px] rounded-full overflow-hidden flex-[1_0_0]"
          src="https://i.pinimg.com/736x/7c/01/da/7c01da1f0562de36833d35d5530187a8.jpg"
        />
        <h1 className="text-2xl text-neutral-black font-medium leading-5 tracking-wide">Martina Farías</h1>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-[13px] text-neutral-black font-normal leading-5 tracking-[0.1px] py-1">Habilidades intercambiadas</p>
        <div className="flex gap-2">
          <span className="flex justify-center items-center px-5 py-1 h-[1.4rem] text-[12px] w-auto border border-black-80 rounded-full text-sm text-black-80">Figma</span>
          <TbRefresh className="text-2xl text-black-80 rotate-180 -scale-x-100"/>
          <span className="flex justify-center items-center px-5 py-1 h-[1.4rem] text-[12px] w-auto border border-black-80 rounded-full text-sm text-black-80">Diseño</span>
        </div>
      </div>
      <div className="min-w-2/12">
        <PrimaryButton 
          className="h-10 bg-celeste-100 hover:bg-[#3259e8]"
          label="Finalizar intercambio"/>
      </div>
    </div>
  )
}

export default ChatBoxHeader