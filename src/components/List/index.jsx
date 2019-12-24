import React from 'react';
import './List.scss';
import ImageBox from '../ImageBox';

const List = ({columns = 1, items = [], isPristine = true, isLoading = false}) => {
  const hasResults = !!items.length;
  const pristineMessage = (
    <li className="ug-list__item ug-list__item--is-pristine">
      <h2 className="ug-list__item-title">Uber Giphy :)</h2>
      <h4 className="ug-list__item-subtitle">crafted by kavare 😊</h4>
    </li>
  );

  const loadingMessage = (
    <li className="ug-list__item ug-list__item--is-loading">
      <h2 className="ug-list__item-title">Loading......</h2>
    </li>
  );

  const noResultsMessage = (
    <li className="ug-list__item ug-list__item--no-results">
      <h2 className="ug-list__item-title">No results here :( How about trying new keywords?</h2>
    </li>
  );

  return (
    <ul className={`
        ug-list
        ${columns === 3 ? 'ug-list--three-column' : 'ug-list--single-column'}
        ${hasResults ? '' : 'ug-list--no-results' }
        ${isLoading ? 'ug-list--is-loading' : '' }
        ${isPristine ? 'ug-list--is-pristine' : '' }
     `}
      data-testid="ug-list"
    >
      {
        hasResults
          ? items.map(datum => (
            <li className="ug-list__item" key={datum.id}>
              <ImageBox key={datum.id} data={datum} columns={columns} />
            </li>
          ))
          : isPristine
            ? pristineMessage
            : isLoading
              ? loadingMessage
              : noResultsMessage
      }
    </ul>
  )
}

export default List;
