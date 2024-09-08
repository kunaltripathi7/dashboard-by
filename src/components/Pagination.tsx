import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  pages: number;
  currentPage: number;
  handleCurrentPage: (page: number) => void;
}

const Pagination = ({ pages, currentPage, handleCurrentPage }: Props) => {
  return (
    <div className="flex items-center gap-1">
      <button
        className={`hover:bg-gray-100 rounded-full h-10 w-10 flex justify-center items-center ${
          currentPage === 1 && "text-gray-400"
        }`}
        onClick={() => {
          if (currentPage > 1) handleCurrentPage(currentPage - 1);
        }}
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      {Array.from({ length: pages }).map((_, index) => (
        <button
          onClick={() => handleCurrentPage(index + 1)}
          className={` rounded-full p-2 h-10 w-10 ${
            currentPage - 1 === index
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-100"
          } `}
        >
          {index + 1}
        </button>
      ))}
      <button
        className={`hover:bg-gray-100 rounded-full p-2 h-10 w-10 flex justify-center items-center ${
          currentPage === pages && "text-gray-400"
        } `}
        onClick={() => {
          if (currentPage < pages) handleCurrentPage(currentPage + 1);
        }}
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
};

export default Pagination;
