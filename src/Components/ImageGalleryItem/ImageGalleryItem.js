import React from 'react';
import PropTypes from 'prop-types';
import { Image } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({
  alt = '',
  webformatURL,
  onClick,
  id,
}) => (
  <>
    <Image
      id={id}
      src={webformatURL}
      alt={alt}
      onClick={onClick}
    />
  </>
);

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    alt: PropTypes.string.isRequired,
    //largeImageURL: PropTypes.string.isRequired,
    webformatURL:
      PropTypes.string.isRequired,
    getLargeImageURL:
      PropTypes.func.isRequired,
  }),
};

export { ImageGalleryItem };
