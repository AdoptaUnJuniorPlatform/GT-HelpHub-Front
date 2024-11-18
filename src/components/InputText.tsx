import { Input } from "../types/types"

function InputText({id, placeholder, name, value, onChange}: Input) {
  return (
    <form>
      <input
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange} 
        maxLength={5}
        className="w-[22.6rem] h-[3.7rem] mx-2 text-base not-italic font-normal leading-6 tracking-wide border border-black-50 rounded-md bg-white px-4 focus:outline-none focus:ring-1 focus:ring-black-80"
      />
    </form>
  )
}

export default InputText