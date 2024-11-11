import { FaRegCircleCheck } from "react-icons/fa6"
import { GreenAlertProps } from "../types/types"

function GreenAlert({title, text}: GreenAlertProps) {
  return (
    <div className="flex flex-col w-full justify-center h-24 bg-green-100 text-green-800 p-5 rounded-lg gap-3">
      <div className="flex items-center gap-3 -mb-2">
        <span><FaRegCircleCheck className="fill-green-10 text-2xl"/></span>
        <h3 className="text-2xl font-normal leading-normal text-[#4B6C4C]">¡{title}!</h3>
      </div>
      <p className="text-base text-[#4B6C4C] font-normal leading-normal tracking-wide">{text}</p>
    </div>
  )
}

export default GreenAlert