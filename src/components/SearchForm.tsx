import { useState, ChangeEvent, FormEvent, useEffect } from "react";

const SearchForm = () => {
  const [search, setSearch] = useState<string>("");
  const [results, setResults] = useState<string>("3");
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (search) {
      setError(false);
    } else {
      setError(true);
    }
  }, [search]);

  const handleResultsChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setResults(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search === "") {
      setError(true);
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 items-start">
      <div className="flex flex-col gap-1 relative">
        <input
          type="text"
          id="search"
          value={search}
          onChange={handleSearchChange}
          className={`px-6 border-[1px] border-gray-300 rounded-sm py-[8px]   peer focus:border-blue-500 outline-none focus:border-[2px] ${
            search ? "border-blue-500 border-[2px]" : "hover:border-gray-600"
          }
          ${
            error
              ? "border-rose-600 focus:border-rose-600 hover:border-rose-600"
              : ""
          } 
          `}
          placeholder=" "
        />
        <label
          htmlFor="search"
          className={`absolute left-4 top-2  transition-all transform peer-placeholder-shown:top-2 peer-placeholder-shown:left-4  peer-focus:-top-2 peer-focus:left-4  peer-focus:text-xs peer-focus:bg-white peer-focus:px-1 text-lg cursor-text  ${
            error
              ? "peer-focus:text-rose-600 peer-placeholder-shown:text-rose-600"
              : "peer-focus:text-blue-500 text-gray-500 peer-placeholder-shown:text-gray-500"
          } ${search && "-top-2 text-xs bg-white text-blue-500 px-1"}`}
        >
          Search
        </label>
        {error && <span className="text-rose-600 text-xs ml-2">Required</span>}
      </div>
      <div className="relative">
        <select
          id="results"
          value={results}
          onChange={handleResultsChange}
          className="outline-none cursor-pointer appearance-none pr-[80px] pl-3 outline-gray-300 rounded-[3px] py-[8px] hover:outline-gray-600  peer focus:outline-none focus:shadow-outline focus:outline-blue-500 select-none text-center relative outline-1"
          onClick={() => setDropdownOpen((prev) => !prev)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
        <svg
          className={`w-6 h-6 text-gray-700 fill-current absolute bottom-2 left-[76px] z-20 rotate-180 cursor-pointer pointer-events-none ${
            isDropdownOpen && "rotate-0"
          }`}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7 10l5 5l5 -5Z" />
        </svg>
        <label
          htmlFor="results"
          className={`absolute peer-placeholder-shown:left-4 -top-[10px] left-1 bg-white px-2 text-xs peer-focus:text-blue-500 text-gray-500 peer-placeholder-shown:text-gray-500"
          `}
        >
          Results
        </label>
      </div>
      <button
        type="submit"
        className="bg-[#2872FA] text-white px-4 py-3 rounded-md text-sm font-semibold"
      >
        SEARCH
      </button>
    </form>
  );
};

export default SearchForm;
