import { TbAlertTriangle } from "react-icons/tb"

function InboxEmpty() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
      <div className="text-4xl text-[#5F5F5F]">
        <TbAlertTriangle size={47}/>
      </div>
      <h1 className="text-2xl font-normal text-neutral-black leading-normal -pb-8">Sin conversaciones</h1>
      <p className="text-base text-black-50 font-normal leading-normal tracking-wide">No hay conversaciones</p>
      <button className="text-sm font-medium leading-5 px-4 py-2 border border-gray-500 rounded-md hover:bg-gray-100 focus:outline-none flex-[1,0,0%]">
        Buscar intercambio
      </button>
    </div>
  )
}

export default InboxEmpty