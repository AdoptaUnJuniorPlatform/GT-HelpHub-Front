import { Input } from "../types/types"

function RegisterName( { title, placeholder, name, style, className, value, onChange }: Input ) {
  
  return (
    <section 
      className="flex flex-col justify-start items-start font-normal not-italic font-poppins w-full max-w-lg mx-auto"
    >
      <span className={`text-slate-900 text-sm md:text-base ${className}`}>
        {title}
      </span>
      <label htmlFor={name} className="w-full">
        <input
          id={name}
          required
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          style={style}
          className={`text-slate-700 w-full text-sm md:text-base rounded-lg p-3 h-10 border border-blue-gray-100 mt-1.5 caret-violet-700 outline-violeta-100 outline-1 transition-all duration-300 focus:border-violet-500 ${className}`}
        />
      </label>
    </section>
  )
}

export default RegisterName