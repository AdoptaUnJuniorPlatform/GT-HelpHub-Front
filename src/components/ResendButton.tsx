import { FaChevronRight } from "react-icons/fa"

function ResendButton( {type, onClick} : { type: 'button', onClick: () => void}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="flex items-center text-celeste-100 text-sm font-semibold leading-4 "
    >
      REENVIAR CÓDIGO
      <FaChevronRight className="ml-1" />
    </button>
  )
}

export default ResendButton