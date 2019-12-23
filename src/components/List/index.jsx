import React from 'react';
import './List.scss';
import ImageBox from '../ImageBox';

const List = ({children, items}) => {
  return (
    <ul className="ug-list">
      {
        (items && items.length) ? items.map(datum => (
          <li className="ug-list__item" key={datum.id}><ImageBox data={datum}/></li>
        )) : null
      }
    </ul>
  )
}

export default List;
