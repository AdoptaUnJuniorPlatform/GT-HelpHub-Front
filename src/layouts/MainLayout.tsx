import { ReactNode } from "react"
import Footer from "../components/Footer"
import { useLocation } from "react-router-dom"
import { useChatContext } from "../context/ChatContext";

function MainLayout({ children } : { children: ReactNode }) {
  const {openRequestTab} = useChatContext();
  const location = useLocation();
  const isSMS = location.pathname === '/mensajes'
  return (
    <>
      <main className={`flex flex-col justify-center items-center w-full min-h-dvh ${isSMS? 'bg-neutral-gray' : 'bg-white'}`}>
        <section className={`w-[90%]  ${openRequestTab? "" : "relative"}`}>
          {children}
        </section>
        <Footer />
      </main>
    </>
  )
}

export default MainLayout