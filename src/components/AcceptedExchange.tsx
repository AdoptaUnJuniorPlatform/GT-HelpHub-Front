import { ExchangeAcceptedProps } from "../types/types"

function AcceptedExchange({ user, userImage,date } : ExchangeAcceptedProps) {
  return (
    <>
      <div className="flex justify-end w-full pb-3">
        <span className="text-gray-500 text-sm">{date}</span>
      </div>
      <div className="flex p-5 bg-white mb-4 rounded-lg shadow-lg shadow-gray-200">
        <div className="flex bg-white">
          <div className="flex-shrink-0">
            <img
              src={userImage}
              alt={`${user} avatar`}
              className="w-[3.7rem] h-[3.7rem] rounded-full object-cover mr-4"
            />
          </div>
          <div className="flex-grow">
            <p className="font-normal text-2xl text-neutral-black -mt-1">Intercambio aceptado</p>
            <p className="text-2xl text-violeta-100 font-normal leading-normal">{user}</p>
            <p className="text-base font-normal text-neutral-black leading-normal tracking-wide py-1">¡El intercambio ha comenzado! Envía tu primer mensaje y conoce a la otra persona.</p>
            <div className="w-full flex justify-end">
              <button className="w-[9rem] bg-celeste-100 text-white px-[1em] py-[0.9em] text-base font-medium leading-5 rounded-lg hover:bg-blue-700 transition-all">
                Enviar mensaje
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AcceptedExchange