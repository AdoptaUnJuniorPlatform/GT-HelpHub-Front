import { RejectedRequestProps } from "../types/types"

function RejectedRequest({ user, userImage, date }: RejectedRequestProps) {
  return (
    <>
      <div className="flex justify-end w-full pb-3">
        <span className="text-gray-500 text-sm">{date}</span>
      </div>
      <div className="flex p-5 bg-white mb-4 rounded-lg shadow-lg shadow-gray-200">
        <div className="flex-shrink-0">
          <img
            src={userImage}
            alt={`${user} avatar`}
            className="w-[3.7rem] h-[3.7rem] rounded-full object-cover mr-4"
          />
        </div>
        <div className="flex-grow">
          <p className="font-normal text-2xl text-neutral-black -mt-1">Intercambio rechazado</p>
          <p className="text-2xl text-violeta-100 font-normal leading-normal">{user}</p>
          <p className="text-black-80 text-base font-normal leading-normal">Lo sentimos, busca otras habilidades para intercambiar.</p>
        </div>
      </div>
    </>
  )
}

export default RejectedRequest