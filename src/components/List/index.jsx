import React from 'react';
import './List.scss';
import ImageBox from '../ImageBox';

const List = ({columns = 1, items = [], isPristine = true}) => {
  const hasResults = !!items.length;
  const pristineMessage = (
    <li className="ug-list__item ug-list__item--is-pristine">
      <h2 className="ug-list__item-title">Uber Giphy :)</h2>
      <h4 className="ug-list__item-subtitle">crafted by kavare
        <span role="img" aria-label="love"> 😊 </span>
      </h4>
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
            : noResultsMessage
      }
    </ul>
  )
}

export default List;
