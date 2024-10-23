import { PaginationProps } from "../types/types";
import { TbDots } from "react-icons/tb";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

function Pagination({ currentPage }: PaginationProps) {
  return (
    <div className="flex items-center space-x-2">

      <button className="flex items-center justify-center px-2 py-1 border rounded w-[50px] h-[50px]"><MdArrowBackIos /></button>

      <button className={`px-2 py-1 border rounded w-[50px] h-[50px] ${currentPage === 1 ? 'bg-gray-300' : ''}`}>
        1
      </button>
      <button className="px-2 py-1 border rounded w-[50px] h-[50px]">2</button>
      <button className="px-2 py-1 border rounded w-[50px] h-[50px]">3</button>
      <button className="px-2 py-1 border rounded w-[50px] h-[50px]">4</button>
      <button className="px-2 py-1 border rounded w-[50px] h-[50px]">5</button>
      <span className="px-2 w-[50px] h-[50px] flex items-center justify-center"><TbDots /></span>
      <button className="px-2 py-1 border rounded w-[50px] h-[50px]">10</button>

      <button className="flex items-center justify-center px-2 py-1 border rounded w-[50px] h-[50px]"><MdArrowForwardIos /></button>
    </div>
  );
}

export default Pagination;
