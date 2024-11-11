import { forwardRef } from "react"
import { Input } from "../types/types"

const CodeInput = forwardRef<HTMLInputElement, Input>(
  function CodeInput({ type, name, value, onChange }, ref) {
    return (
      <input
        ref={ref}
        id={name}
        required 
        type={type}
        name={name}
        value={value}
        placeholder="0"
        maxLength={1}
        onChange={onChange}
        className="flex justify-center items-center gap-12 flex-[1_0_0%] h-24 min-w-8 max-w-20 min-h-10 max-h-24 py-3 rounded-lg border border-[#CFD8DC] bg-white text-center text-4xl"
      />
    )
  }
)

export default CodeInput