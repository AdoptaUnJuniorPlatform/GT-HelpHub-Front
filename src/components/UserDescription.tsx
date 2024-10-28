import { profiles } from "../Variables/varibles"

function UserDescription() {
  return (
    <div className="flex justify-start items-center w-[40rem]  bg-[rgba(174,174,174,0.1)] rounded-xl text-black-80 p-6">
      <p className="text-base font-normal leading-normal tracking-wide w-[35rem]">{profiles[0].description}</p>
    </div>
  )
}

export default UserDescription