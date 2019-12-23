import React from 'react';
import './ImageBox.scss';

const ImageBox = ({children, data}) => {
  return (
    <img src={data.images.original.webp} alt={data.title}/>
  )
}

export default ImageBox;


