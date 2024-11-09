import { CgClose } from "react-icons/cg"
import { GoCheckCircleFill } from "react-icons/go"
import Confetti from "react-confetti";
import { useEffect, useState } from "react";

function TwoFaModal({type, onClick}: {type: 'button', onClick: () => void}) {
  const [confetti, setConfetti] = useState<boolean>(false);
  useEffect(() => {
    setConfetti(true);
  }, []);
  return (
    <main className="fixed flex items-center justify-center inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40">
      {confetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
        />
      ) }
      <section className="flex items-start justify-between p-6 bg-green-10 text-neutral-gray rounded-lg shadow-lg w-5/11 sm:w-3/12 md:w-8/12 lg:w-5/12 z-50">
        <article className="flex items-start gap-5">
          <div className="flex items-start text-2xl">
            <GoCheckCircleFill />
          </div>
          <div className="flex flex-col items-start">
            <h3 className="text-2xl font-normal leading-normal">¡Activada!</h3>
            <p className="text-2xl font-medium leading-normal tracking-wide">Tu autenticación en dos factores (2FA) ha sido habilitada correctamente.</p>
            <p className="text-base font-normal leading-normal tracking-wide">Cada 00 días solicitaremos un nuevo código.</p>
          </div>
        </article>
        <button 
          type={type}
          onClick={onClick} 
          className="text-3xl">
          <CgClose />
        </button>
      </section>
    </main>
  )
}

export default TwoFaModal