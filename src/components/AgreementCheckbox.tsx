import { Input } from "../types/types"

function AgreementCheckbox( { type, name, checked, id, onChange }: Input ) {
  return (
    <>
      <div className="flex items-start w-full sm:w-[376px] text-neutral-black py-6">
        <input
          id={id}
          type={type}
          name={name}
          checked={checked}
          onChange={onChange}
          className="mr-4" 
        />
        <span className="font-roboto text-base not-italic font-normal tracking-wide">
          Estoy de acuerdo con sus{' '}
          <a href="/terminos" className="text-blue-500 underline"> 
            Términos de servicio
          </a>{' '}
          y{' '}
          <a href="/politica-privacidad" className="text-celeste-100 underline">
            Política de privacidad
          </a>.
        </span>
      </div>
    </>
  )
}

export default AgreementCheckbox