import CardBtnBorder from "./CardBtnBorder"
import CardBtnPrimary from "./CardBtnPrimary"
import ChatAccordition from "./ChatAccordition"
import ProfileImg from "./ProfileImg"
import Ratings from "./Ratings"

function RequestTab() {
  return (
    <aside className="flex flex-col justify-between top-0 right-0 w-[27rem] h-full border-l border-b border-black-50 bg-white">
      <article>
        <figure className="flex flex-col items-center justify-center w-full pt-16">
          <ProfileImg
            className="w-44 h-44 rounded-[10px] overflow-hidden" 
            src="https://i.pinimg.com/736x/d3/26/8d/d3268d71b337419741c93100b9b994f5.jpg"/>
          <h1 className="text-[34px] text-neutral-black font-bold leading-normal tracking-wide">Jorge Quintero</h1>
          <Ratings reviews={15}/>
        </figure>
        <div className="w-full">
          <ChatAccordition title="Sobre mí" content="info"/>
          <ChatAccordition title="Disponibilidad" content="info"/>
          <ChatAccordition title="Mis habilidades activas" content="info"/>
        </div>
      </article>
      <div className="flex flex-col items-center">
        <div className="py-10">
          <h2 className="text-xl text-neutral-black font-bold leading-6 tracking-wide pl-3 pb-5">Iniciar intercambio</h2>
          <div className="flex w-full px-3 gap-3">
            <CardBtnBorder label="Declinar" className=""/>
            <CardBtnPrimary label="Iniciar intercambio"/>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default RequestTab