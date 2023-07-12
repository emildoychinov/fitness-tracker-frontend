import * as React from "react";
import "./SearchBar.css";



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
  };

  return (
    <>

     <div className="searchbar" id="searchbar">
    <form className="form-search" onSubmit={handleSubmit}>
      <input className="search-text"
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={handleSearch}
      />
       <i className="fa fa-search" aria-hidden="true">
       <button type="submit">Sumbmit</button>
       </i>
    </form>

    </div>
    
    
    </>
  );
};

export default SearchBar;