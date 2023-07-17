import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Search = ({ handleSearchNote }) => {
  return (
    <div className="search">
      <SearchIcon className="search-icon" />
      <input
        type="text"
        placeholder="search..."
        onChange={(event) => handleSearchNote(event.target.value)}
      />
    </div>
  );
};

export default Search;
