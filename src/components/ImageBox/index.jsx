import React from 'react';
import './ImageBox.scss';

const ImageBox = ({data, columns}) => {
  const imgUrl = (columns === 3)
    ? data.images.fixed_height.webp
    : data.images.fixed_width.webp

  return (
    <div className="ug-image-box">
      <h5 className="ug-image-box__title">{data.title}</h5>
      <img
        className="ug-image-box__img"
        src={imgUrl}
        alt={data.title}
      />
    </div>
  )
}

export default ImageBox;


