import { useState, useEffect, useRef } from "react";
import MoreInfo from "./MoreInfo";
import { HiInformationCircle } from "react-icons/hi";

function RegisterAtivate() {
  const [showPopover, setShowPopover] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  const togglePopover = () => {
    setShowPopover(!showPopover);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setShowPopover(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popoverRef]);

  return (
    <div className="not-italic font-medium font-poppins w-[315px] h-16 ml-2 relative">
      <div className="flex items-center justify-start w-full">
        <p className="text-base p-1">Activar la opción de llamada</p>
        <span
          className="flex items-center justify-center mx-3 text-xl text-[#acb0b8] cursor-pointer relative"
          onClick={togglePopover}
          ref={popoverRef}
        >
          <HiInformationCircle />
          {showPopover && (
            <article className="absolute top-4 right-40 font-poppins">
              <MoreInfo
                header="Coordinar directamente por llamada"
                info="No te preocupes, tu teléfono no esta visible para todos los usuarios. Solo estará visible para la persona con la que solicites un intercambio."
              />
            </article>
          )}
        </span>
      </div>
      <p className="text-sm text-[#607D8B] p-1 font-normal">
        Mostrar teléfono al iniciar intercambio
      </p>
    </div>
  );
}

export default RegisterAtivate;