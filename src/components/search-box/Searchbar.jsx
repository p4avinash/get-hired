import React from "react";

import "./Searchbar.css";

const Searchbar = ({ onSearchChange }) => {
  return (
    <div className="tc">
      <input
        onChange={onSearchChange}
        className="tc pa2 ma3 search"
        type="search"
        placeholder="search developers"
      />
    </div>
  );
};

export default Searchbar;
