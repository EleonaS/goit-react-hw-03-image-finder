import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import {
  GalleryList,
  Item,
} from './ImageGallery.styled';
import { ImageGalleryItem } from 'Components/ImageGalleryItem/ImageGalleryItem';

export default class ImageGallery extends Component {
  static propTypes = {
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL:
          PropTypes.string.isRequired,
        largeImageURL:
          PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

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
            <Item key={id}>
              <ImageGalleryItem
                id={id}
                webformatURL={
                  webformatURL
                }
                onClick={() =>
                  this.handleClick(
                    largeImageURL,
                  )
                }
              />
            </Item>
          ),
        )}
      </GalleryList>
    );
  }
}

/*return (
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
}*/
export { ImageGallery };
