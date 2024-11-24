import { useProfileContext } from "../context/ProfileContext"
import { Input } from "../types/types"


function InputText({id, placeholder, name, value, onChange}: Input) {
  const {postalCodeError} = useProfileContext();
  return (
    <form>
      <input
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange} 
        maxLength={5}
        className={`w-[22.6rem] h-[3.7rem] mx-2 text-base not-italic font-normal leading-6 tracking-wide border rounded-md bg-white px-4 focus:outline-none focus:ring-1 ${postalCodeError? "border-red-500 focus:ring-red-500" : "border-black-50 focus:ring-black-80"}`}
      />
      {postalCodeError && <p className="error">El código postal no es válido o no pertenece a España</p>}
    </form>
  )
}

export default InputText