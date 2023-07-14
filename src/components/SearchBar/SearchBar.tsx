import * as React from "react";
import "./SearchBar.css";
import { FaSearch } from 'react-icons/fa';
import ResultsPage from "../ResultsPage/ResultsPage";
import { RouterPathEnum } from "src/enums/RouterPathEnum";
import { RouteComponentProps } from "react-router-dom";

const SearchBar = () => {

  const [searchText, setSearchText] = React.useState('');

  const handleSearch = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Perform search or any other action with the search text
    console.log('Search submitted:', searchText);
    // Reset the search text
    setSearchText('');
    window.location.href=RouterPathEnum.SEARCH
  };

  return (
    <>
      <body className="main-box">
        <div className="box">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Search"
              value={searchText}
              onChange={handleSearch}
            />
            <a href="#">
              <i className="search-icon">
                <FaSearch onClick={handleSubmit} />
              </i>

            </a>

          </form>

        </div>

      </body>


    </>
  );
};


export default SearchBar;