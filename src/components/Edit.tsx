
function Edit({onClick}: {onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="flex justify-center items-center w-[5.5rem] h-[3.5rem] rounded-md gap-2 bg-[#1945E3] btn-click">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M2 26H30V28H2V26ZM25.4 9C26.2 8.2 26.2 7 25.4 6.2L21.8 2.6C21 1.8 19.8 1.8 19 2.6L4 17.6V24H10.4L25.4 9ZM20.4 4L24 7.6L21 10.6L17.4 7L20.4 4ZM6 22V18.4L16 8.4L19.6 12L9.6 22H6Z" fill="#FBFBFF"/>
      </svg>
    </button>
  )
}

export default Edit