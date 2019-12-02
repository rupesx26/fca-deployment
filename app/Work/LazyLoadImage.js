import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ImageContainer = ({ image }) => (
  <div>
    <LazyLoadImage
      alt={image.alt}
      src={image.src} // use normal <img> attributes as props
         />
  </div>
);

export default ImageContainer;