import { Input } from "../types/types"

function AgreementCheckbox( { type }: Input ) {
  return (
    <>
      <div className="flex items-start w-[376px] text-neutral-black pb-6">
        <input
          type={type}
          id="agreement-checkbox"

          className="mr-4" 
        />
        <label htmlFor="agreement-checkbox" className="font-roboto text-base not-italic font-normal tracking-wide">
          Estoy de acuerdo con sus{' '}
          <a href="/terminos" className="text-blue-500 underline"> 
            Términos de servicio
          </a>{' '}
          y{' '}
          <a href="/politica-privacidad" className="text-celeste-100 underline">
            Política de privacidad
          </a>.
        </label>
      </div>
    </>
  )
}

export default AgreementCheckbox