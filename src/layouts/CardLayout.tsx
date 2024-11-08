import { ReactNode } from "react"
import { useLocation } from "react-router-dom"

function CardLayout({ children } : { children: ReactNode }) {
  const location = useLocation();
  const isLogin = location.pathname === "/"
  return (
    <div className={`flex flex-col items-start w-[20.5rem] min-w-[17.5rem] py-4 rounded-md bg-[#FBFBFF] shadow-[0_3px_6px_0_rgba(0,0,0,0.25)] font-roboto not-italic text-neutral-black ${isLogin ? "h-[19rem]" : ""}`}>
      {children}
    </div>
  )
}

export default CardLayout