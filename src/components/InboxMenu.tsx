import { InboxMenuProps } from "../types/types"

function InboxMenu({title, numSms}: InboxMenuProps) {
  return (
    <div className="flex justify-between items-center w-11/12 py-[7px] px-[11px] my-1 bg-violeta-100 rounded-md">
      <p className="text-base font-bold leading-6 text-white tracking-wide">{title}</p>
      <span className="flex justify-center items-center w-[1.6rem] h-5 p-[10px] text-sm text-violeta-100 font-medium leading-6 tracking-wide text-center shrink-0 bg-white rounded-[20px]">{numSms}</span>
    </div>
  )
}

export default InboxMenu