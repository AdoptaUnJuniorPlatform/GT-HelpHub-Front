import { GrSearch } from "react-icons/gr"

function SearchBar() {

  return (
    <>
      <form action='' className='flex justify-end relative font-roboto text-[1rem] not-italic text-normal leading-[50%] tracking-wide'>
        <input
          type="text"
          name='search'
          placeholder="¿Qué estás buscando?"
          className="flex items-center h-[3.5rem] w-[43.13rem] min-w-[22.5rem] max-w-[45rem] bg-violeta-20 pr-16 pl-4 py-2 rounded-[28px] focus:outline-none focus:ring-2 focus:ring-violet-500 caret-violet-600"
        />
        <GrSearch
          className="absolute right-[1.5rem] top-[1.2rem] text-gray-600 cursor-pointer"
          size={20}
        />
      </form>
    </>
  )
}

export default SearchBar