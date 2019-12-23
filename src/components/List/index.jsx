import React from 'react';
import './List.scss';
import ImageBox from '../ImageBox';

const List = ({children, items, isPristine, isLoading}) => {
  const hasResults = !!items.length;

  return (
    <ul className={`ug-list ${hasResults ? '' : 'ug-list--no-results' }`}>
      {
        hasResults
          ? items.map(datum => (
            <li className="ug-list__item" key={datum.id}><ImageBox data={datum}/></li>
          ))
          : isPristine
            ? <h2 className="ug-list__item--is-pristine">Welcome to Uber Giphy :)</h2>
            : isLoading
              ? <h2 className="ug-list__item--is-loading">Loading......</h2>
              : <h2 className="ug-list__item--no-results">There is no results here, try new keywords :)</h2>
      }
    </ul>
  )
}

export default List;
