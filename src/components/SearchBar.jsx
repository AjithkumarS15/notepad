import React, { useState } from 'react';

function SearchBar({ data }) { 
  const [searchTerm, setSearchTerm] = useState('');
  
 
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder="Search..." 
          onChange={(e) => setSearchTerm(e.target.value)} // Update the searchTerm state on input change
          value={searchTerm}
        />
      </div>
      <div className="dataResults">
        {searchTerm.length !== 0 ? ( // Display filtered results only when the search bar has input
          filteredData.map((value, key) => (
            <div key={key} className="dataItem">
              {value.name}
            </div>
          ))
        ) : (
          <div>
            <h3>Type to search</h3>  // Display message when search term is empty
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;