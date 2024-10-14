import LogingAside from "../components/LogingAside"

function Login() {
  return (
    <>
      <main className="flex justify-center items-center w-screen min-h-screen">
        <div className="flex flex-col lg:flex-row lg:justify-around w-10/12 lg:h-auto h-full">
          <LogingAside />
        </div>
        <section className="flex flex-col items-center justify-center pt-9 lg:ml-28 w-full lg:w-10/12 lg:items-start lg:justify-between">  

        </section>
      </main>

    </>
  )
}

export default Login