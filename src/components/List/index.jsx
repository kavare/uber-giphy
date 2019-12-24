import React from 'react';
import './List.scss';
import ImageBox from '../ImageBox';

const List = ({columns, items, isPristine, isLoading}) => {
  const hasResults = !!items.length;
  return (
    <ul className={`
      ug-list
      ${columns === 3 ? 'ug-list--three-column' : 'ug-list--single-column'}
      ${hasResults ? '' : 'ug-list--no-results' }
     `}>
      {
        hasResults
          ? items.map(datum => (
            <li className="ug-list__item" key={datum.id}><ImageBox data={datum} columns={columns} /></li>
          ))
          : isPristine
            ? <h2 className="ug-list__item--is-pristine">Uber Giphy :) <span className="ug-list__item-footnote">by kavare</span></h2>
            : isLoading
              ? <h2 className="ug-list__item--is-loading">Loading......</h2>
              : <h2 className="ug-list__item--no-results">No results here :( How about trying new keywords?</h2>
      }
    </ul>
  )
}

export default List;
