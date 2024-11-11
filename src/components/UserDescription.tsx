import { profiles } from "../Variables/varibles"

function UserDescription() {
  return (
    <div className="flex justify-start w-9/12 items-center bg-[rgba(174,174,174,0.1)] rounded-xl text-black-80 p-6 tracking-wide">
      <p className="text-base font-normal leading-normal tracking-wide w-[35rem]">{profiles[0].description}</p>
    </div>
  )
}

export default UserDescription