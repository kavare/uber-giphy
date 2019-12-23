import React from 'react';
import './SearchBar.scss';

const SearchBar = (props) => {
  const {
    keywords,
    updateKeywords,
  } = props;

  return (
    <div className="ug-searchbar">
      <input
        className="ug-searchbar__input"
        type="text"
        value={keywords}
        onChange={updateKeywords}
      />
    </div>
  )
}

export default SearchBar;
