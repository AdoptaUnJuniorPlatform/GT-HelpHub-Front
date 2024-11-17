import { GrSearch } from "react-icons/gr"

function SearchBar({ searchTerm, onSearchChange }: { searchTerm: string; onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {

  return (
    <form 
      action='' 
      className='flex justify-end relative font-roboto text-base not-italic text-normal leading-[50%] tracking-wide w-full max-w-[90%] md:max-w-full'>
      <input
        type="text"
        name='search'
        value={searchTerm}
        onChange={onSearchChange}
        placeholder="¿Qué estás buscando?"
        className="flex items-center h-[3.5rem] w-full sm:w-[20rem] md:w-[30rem] lg:w-[43.13rem] bg-violeta-20 pr-16 pl-4 py-2 rounded-[28px] focus:outline-none focus:ring-2 focus:ring-violet-500 caret-violet-600"
      />
      <GrSearch
        className="absolute right-[1.5rem] top-[1.2rem] text-gray-600 cursor-pointer"
        size={20}
      />
    </form>
  )
}

export default SearchBar