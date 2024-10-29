import { ReactNode } from "react"

function CardLayout({ children } : { children: ReactNode }) {
  return (
    <div className="flex flex-col items-start w-[21rem] py-4 rounded-md bg-[#FBFBFF] shadow-[0_3px_6px_0_rgba(0,0,0,0.25)] font-roboto not-italic text-neutral-black">
      {children}
    </div>
  )
}

export default CardLayout