import React from 'react';

const SearchBar = (props) => {
  
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input type="radio" name="button" value="Alphabetically" checked={null} onChange={(event) => props.setSortType(event.target.value)}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" name="button" value="Price" checked={null} onChange={(event) => props.setSortType(event.target.value)}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(event) => props.setFilterType(event.target.value)}>
          <option value="">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
