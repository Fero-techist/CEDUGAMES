import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (ev) => {
    const value = ev.target.value;
    setSearchTerm(value);
    onSearch(value); // Communicate the search term to the parent component
  };

  return (
    <>
      <div className="flex items-center gap-4 rounded-full border  py-2 px-4  w-[467px]">
        <CiSearch
          size={25}
          className="text-gray-400"
        />
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
          className="w-full p-1 focus:outline-none text-[#1C1C1C] font-satoshi font-semibold"
        />
      </div>
    </>
  );
}

export default Search;
