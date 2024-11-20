import { ReactNode } from "react"
import Footer from "../components/Footer"
import { useLocation } from "react-router-dom"

function MainLayout({ children } : { children: ReactNode }) {
  const location = useLocation();
  const isSMS = location.pathname === '/mensajes'
  return (
    <>
      <main className={`flex flex-col justify-center items-center w-full min-h-dvh ${isSMS? 'bg-neutral-gray' : 'bg-white'}`}>
        <section className="w-[90%] mt-7 relative">
          {children}
        </section>
        <Footer />
      </main>
    </>
  )
}

export default MainLayout