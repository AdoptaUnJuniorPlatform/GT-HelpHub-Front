import { InfoProps } from "../types/types"

function MoreInfo( { header, info }: InfoProps ) {
  return (
    <article className="absolute flex flex-col text-sm z-10 left-0 bottom-8 w-80 bg-black-80 text-white p-3 rounded-md shadow-xl">
      <p className="text-xs mb-1 font-medium">{header}</p>
      <p className="text-xs font-normal">{info}</p>
    </article>
  )
}

export default MoreInfo