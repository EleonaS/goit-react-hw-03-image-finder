import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyledOverlay,
  Content,
} from './Modal.styled';
//import { createPortal } from 'react-dom';

class Modal extends Component {
  static propTypes = {
    largeImageUrl:
      PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener(
      'keydown',
      this.handleKeyDown,
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      'keydown',
      this.handleKeyDown,
    );
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageUrl } =
      this.props;
    return (
      <>
        <StyledOverlay
          onClick={
            this.handleBackdropClick
          }
        >
          <Content>
            <img
              src={largeImageUrl}
              alt="not available"
            />
          </Content>
        </StyledOverlay>
      </>
    );
  }
}

/*
Modal.propTypes = {
  largeImageUrl: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
*/

export { Modal };
