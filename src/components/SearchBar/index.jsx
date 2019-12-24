import React from 'react';
import './SearchBar.scss';

const SearchBar = (props) => {
  const {
    className,
    keywords,
    updateKeywords,
  } = props;

  return (
    <div
      className={`ug-searchbar ${className}`}
      data-testid="ug-searchbar"
    >
      <input
        className="ug-searchbar__input"
        data-testid="ug-searchbar__input"
        type="text"
        value={keywords}
        placeholder="Search Giphy..."
        onChange={updateKeywords}
      />
    </div>
  )
}

export default SearchBar;
