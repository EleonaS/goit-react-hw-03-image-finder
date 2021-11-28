import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import { GalleryList } from './ImageGallery.styled';
import { ImageGalleryItem } from 'Components/ImageGalleryItem/ImageGalleryItem';

export default class ImageGallery extends Component {
  handleClick = largeImageURL => {
    this.props.onClose(largeImageURL);
  };

  render() {
    const { images } = this.props;

    return (
      <GalleryList>
        {images.map(
          ({
            id,
            webformatURL,
            largeImageURL,
          }) => (
            <ImageGalleryItem
              key={id}
              webformatURL={
                webformatURL
              }
              id={id}
              onClick={() =>
                this.handleClick(
                  largeImageURL,
                )
              }
            />
          ),
        )}
      </GalleryList>
    );
  }
}
/* 
ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onImageSelect: PropTypes.func.isRequired,
};*/

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL:
        PropTypes.string.isRequired,
      largeImageURL:
        PropTypes.string.isRequired,
    }),
  ).isRequired,
  onClose: PropTypes.func.isRequired,
};

export { ImageGallery };
