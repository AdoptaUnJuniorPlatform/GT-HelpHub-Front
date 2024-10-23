function Line({ className }: { className: string }) {
  return (
    <div className={`h-[2px] bg-black-80 ${className}`}></div>
  )
}

export default Line