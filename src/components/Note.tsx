function Note({ className }: { className: string }) {
  return (
    <p className={`font-poppins font-normal text-[14px] w-full ${className}`}>
      La contraseña debe incluir al menos 6 caracteres, una letra mayúscula , un número y un símbolo.
    </p>
  )
}

export default Note