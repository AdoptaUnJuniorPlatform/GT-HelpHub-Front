import { ReactNode, useState } from 'react';
import { IoMdArrowDropdown, IoMdArrowDropright } from 'react-icons/io';

function Accordion({title, content}: { title: string; content: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleAccordion() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="border-b border-[#E2E2E2] w-full">
      <button
        onClick={toggleAccordion}
        className="flex justify-between items-center w-full py-6 px-5 text-left"
      >
        <span className="text-base text-black-80 leading-6 tracking-wide font-bold">{title}</span>
        <span className='text-base text-black-80'>{isOpen ? <IoMdArrowDropdown size={25}/> : <IoMdArrowDropright size={25}/>}</span>
      </button>
      {isOpen && 
      <div className="px-6 py-3 bg-[rgba(246,246,246,0.70)] border-t-[1px] border-[#E2E2E2]">
        {content}
      </div>}
    </div>
  );
}

export default Accordion;