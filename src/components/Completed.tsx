import { CompletedProps } from "../types/types"

function Completed({ user, message, userImage, date } : CompletedProps) {
  return (
    <>
      <div className="flex justify-end w-full pb-3">
        <span className="text-gray-500 text-sm">{date}</span>
      </div>
      <div className="flex items-start p-5 bg-white mb-4 rounded-lg shadow-lg shadow-gray-200">
        <div className="flex-shrink-0">
          <img
            src={userImage}
            alt={`${user} avatar`}
            className="w-[3.7rem] h-[3.7rem] rounded-full object-cover mr-4"
          />
        </div>
        <div className="flex-grow">
          <p className="text-2xl text-neutral-black font-normal leading-normal -mt-2">Intercambio completado</p>
          <p className="text-2xl text-violeta-100 font-normal leading-normal">{user}</p>
          <p className="text-base font-normal text-neutral-black leading-normal tracking-wide py-1">{message}</p>
          <div className="w-full flex justify-end py-2">
            <button className="w-[11.5rem] bg-celeste-100 text-white px-[1em] py-[0.9em] text-base font-medium leading-5 rounded-lg hover:bg-blue-700 transition-all">
              Valorar intercambio
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Completed