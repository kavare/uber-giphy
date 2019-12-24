import React from 'react';
import './ImageBox.scss';

const ImageBox = ({data, columns}) => {
  const imgUrl = (columns === 3)
    ? data.images.fixed_height.webp
    : data.images.fixed_width.webp

  return (
    <img
      className="ug-image-box"
      src={imgUrl}
      alt={data.title}
    />
  )
}

export default ImageBox;


