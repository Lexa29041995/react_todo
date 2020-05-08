import React from 'react';
import './SearchBlock.css';
import ItemStatusFilter from '../ItemStatusFilter';


const SearchBlock = () => {
    const searchBlockText = 'What do you want?'
    return (
    <div className = 'search-block'>
      <input placeholder = {searchBlockText} />
      <ItemStatusFilter />
    </div>
    )}

  export default SearchBlock;