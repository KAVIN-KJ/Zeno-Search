import React, { useState } from "react";
import './Styles/Search.css';
import { createContext } from "react";
import DuckDuckGoSearch from "./DuckDuckGoSearch";
import Dictionary from "./Dictionary";

export const queryContext = createContext();

function Search() {
    const [query, setQuery] = useState();
    const[input, setInput] = useState();
  const handleSearchClick = () => {
      setQuery(input);
      console.log(input)
  };

  function changeInput(event){
        setInput(event.target.value)
  }

  return (
    <div className="search">
        <div className="contents">
          <input id="searchBar" onChange={changeInput} className="searchBar" type="text" placeholder="Search Zeno or type a URL" />
          <button onClick={handleSearchClick} className="SearchButton">Search</button>
        </div>
      {query && <DuckDuckGoSearch query = {query}/>}
    </div>
  );
}

export default Search;
