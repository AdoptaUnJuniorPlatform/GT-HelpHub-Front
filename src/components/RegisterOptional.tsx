import { BsFillQuestionCircleFill } from "react-icons/bs";
import Line from "./Line";

function RegisterOptional() {
  
  return (
    <>
      <section className="flex items-center font-roboto w-full h-7 text-violeta-100 not-italic font-medium text-xl tracking-wide">
        <div>
          <BsFillQuestionCircleFill />
        </div>
        <p className="ml-2">Opcional</p>
        <Line  className="ml-3"/>
      </section>
    </>
  )
}

export default RegisterOptional