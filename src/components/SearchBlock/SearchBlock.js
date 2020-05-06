import React from 'react';
import './SearchBlock.css';


const SearchBlock = () => {
    const searchBlockText = 'What do you want?'
    return (
    <div className = 'search-block'>
      <input placeholder = {searchBlockText} />
    </div>
    )}

  export default SearchBlock;