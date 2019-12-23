import React from 'react';
import './ImageBox.scss';

const ImageBox = ({children, data}) => {
  return (
    <img
      className="ug-image-box"
      src={data.images.fixed_width.webp}
      alt={data.title}
    />
  )
}

export default ImageBox;


