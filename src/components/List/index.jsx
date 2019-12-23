import React from 'react';
import './List.scss';

const List = ({children}) => {
  return (
    <ul class="ug-list">
      {children ? children : <h2>List</h2>}
    </ul>
  )
}

export default List;
