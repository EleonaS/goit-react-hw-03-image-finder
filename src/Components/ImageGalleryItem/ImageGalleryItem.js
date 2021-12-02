import React from 'react';
import PropTypes from 'prop-types';
import { Image } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({
  alt = '',
  webformatURL,
  onClick,
}) => (
  <>
    <Image
      src={webformatURL}
      alt={alt}
      onClick={onClick}
    />
  </>
);

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    webformatURL:
      PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }),
};

export { ImageGalleryItem };
