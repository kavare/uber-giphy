import React from 'react';
import './IconButton.scss';

const IconButton = ({className, img, text, onClick}) => {
  return (
    <img
      className={`ug-icon-button ${className}`}
      src={img}
      alt={text}
      onClick={onClick}
    />
  )
}

export default IconButton;


