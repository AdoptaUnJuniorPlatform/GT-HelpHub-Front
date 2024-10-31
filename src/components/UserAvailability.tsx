import { profiles } from "../Variables/varibles"

function UserAvailability() {
  return (
    <span className="flex justify-center items-center w-[10rem] h-[2.9rem] rounded-md flex-shrink-0 border-[1px] border-neutral-black text-base font-normal leading-normal tracking-wide text-neutral-black">{profiles[0].availability}</span>
  )
}

export default UserAvailability