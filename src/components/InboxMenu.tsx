import { InboxMenuProps } from "../types/types"

function InboxMenu({title, numSms, openSms, openRequest, onClick}: InboxMenuProps) {
  return (
    <button 
      onClick={onClick}
      className={`flex justify-between items-center w-11/12 py-[7px] px-[11px] my-1 rounded-md cursor-pointer ${openSms || openRequest ? " bg-violeta-100" : "bg-neutral-gray"}`}>
      <p className={`text-base font-bold leading-6  tracking-wide ${openSms || openRequest ? "text-white" : "text-neutral-black"}`}>{title}</p>
      <span className={`flex justify-center items-center w-[1.6rem] h-5 p-[10px] text-sm font-medium leading-6 tracking-wide text-center shrink-0  rounded-[20px] ${openSms || openRequest ? " text-violeta-100 bg-white" : "text-white bg-celeste-100"}`}>{numSms}</span>
    </button>
  )
}

export default InboxMenu