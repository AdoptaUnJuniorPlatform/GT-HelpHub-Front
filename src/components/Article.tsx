
function Article( { className="", text }: { className?: string, text: string} ) {
  return (
    <article className={`font-roboto text-base not-italic font-light leading-normal ${className}`}>{text}</article>
  )
}

export default Article