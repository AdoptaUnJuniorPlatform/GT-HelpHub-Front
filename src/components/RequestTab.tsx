import ProfileImg from "./ProfileImg"
import Ratings from "./Ratings"

function RequestTab() {
  return (
    <aside className="absolute top-0 right-0 w-[21.6rem] h-[144.8%] border-l border-b border-black-50 bg-white">
      <figure className="flex justify-center w-full pt-16">
        <ProfileImg
          className="w-44 h-44 rounded-[10px] overflow-hidden" 
          src="https://i.pinimg.com/736x/d3/26/8d/d3268d71b337419741c93100b9b994f5.jpg"/>
      </figure>
      <div className="flex flex-col items-center w-full p-5">
        <h1 className="text-[34px] text-neutral-black font-bold leading-normal tracking-wide">Jorge Quintero</h1>
        <Ratings reviews={15}/>
      </div>
    </aside>
  )
}

export default RequestTab