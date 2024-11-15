import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { useState } from "react";

function Pagination({ onPageChange }: { onPageChange: (page: number) => void }) {

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageClick = (pageNumber : number) => {
    setCurrentPage(pageNumber);
    onPageChange(pageNumber);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      onPageChange(newPage);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      onPageChange(newPage);
    }
  };
  return (
    <div className="flex items-center space-x-2">

      <button 
        onClick={handlePrevious}
        className="flex items-center justify-center px-2 py-1 border rounded w-[50px] h-[50px] transition-transform transform active:scale-90 hover:bg-gray-200"
      >
        <MdArrowBackIos />
      </button>

      {[1, 2, 3, 4, 5].map((page) => (
        <button
          key={page}
          onClick={() => handlePageClick(page)}
          className={`px-2 py-1 border rounded w-[50px] h-[50px] ${
            currentPage === page ? 'bg-gray-300' : ''
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={handleNext}
        className="flex items-center justify-center px-2 py-1 border rounded w-[50px] h-[50px] transition-transform transform active:scale-90 hover:bg-gray-200"
      >
        <MdArrowForwardIos />
      </button>
    </div>
  );
}

export default Pagination;
