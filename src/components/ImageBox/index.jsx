import React from 'react';
import './ImageBox.scss';

const ImageBox = ({data, columns}) => {
  const img = data.images.fixed_width.url;
  const webp = data.images.fixed_width.webp;

  return (
    <div
      className="ug-image-box"
      data-testid="ug-image-box"
    >
      <h5 className="ug-image-box__title">{data.title}</h5>
      <picture>
        <source type="image/webp" srcSet={webp} />
        <img
          className="ug-image-box__img"
          src={img}
          alt={data.title}
        />
      </picture>
    </div>
  )
}

export default ImageBox;
