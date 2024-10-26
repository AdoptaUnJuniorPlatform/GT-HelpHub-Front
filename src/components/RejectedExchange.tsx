import { RejectedExchangeProps } from "../types/types"

function RejectedExchange({ user, userImage,date } : RejectedExchangeProps) {
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
          <p className="font-normal text-2xl text-neutral-black -mt-1">Has rechazado la solicitud de intercambio</p>
          <div className="w-[70%] mt-2">
            <p className="text-black-80 text-base font-normal leading-normal">Puedes contactar a <span className="text-violeta-100">{user}</span> para un nuevo intercambio.</p>
          </div>
          <div className="flex justify-end w-full space-x-2 mt-2">
            <div className="flex space-x-2">
              <button className="bg-celeste-100 text-base font-medium text-white px-[1em] py-[0.625em] rounded-lg hover:bg-blue-600 transition-all">
                Ver perfil
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RejectedExchange