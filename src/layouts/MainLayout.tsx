import { ReactNode } from "react"
import Footer from "../components/Footer"

function MainLayout({ children } : { children: ReactNode }) {
  return (
    <>
      <main className="flex flex-col justify-center items-center w-full min-h-dvh">
        <section className="w-[90%] mt-7 relative">
          {children}
        </section>
        <Footer />
      </main>
    </>
  )
}

export default MainLayout