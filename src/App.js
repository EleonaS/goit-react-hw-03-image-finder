import React, {
  Component,
} from 'react';
import {
  ToastContainer,
  toast,
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Api from 'Services/api';
import { Searchbar } from './Components/Searchbar/Searchbar';
import { ImageGallery } from 'Components/ImageGallery/ImageGallery';
import { Button } from 'Components/Searchbar/Searchbar.styled';
import { Modal } from 'Components/Modal/Modal';
import { Loader } from 'Components/Loader/Loader';

class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    images: [],
    largeImageUrl: '',
    error: null,
    showModal: false,
    isLoading: false,
  };

  componentDidUpdate(_, prevState) {
    const prevQuery =
      prevState.searchQuery;
    const nextQuery =
      this.state.searchQuery;
    if (prevQuery !== nextQuery) {
      this.fetchImages();

      window.scrollTo({
        top: document.documentElement
          .scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  handleSelectImage = imageUrl => {
    this.setState({
      selectedImage: imageUrl,
    });
    this.toggleModal();
  };

  toggleModal = largeImageUrl => {
    this.setState({
      largeImageUrl: largeImageUrl,
      showModal: !this.state.showModal,
    });
  };

  handleSubmit = query => {
    this.setState({
      images: [],
      searchQuery: query,
      page: 1,
    });
  };

  fetchImages = () => {
    const { searchQuery, page } =
      this.state;
    this.setState({ isLoading: true });
    Api.fetchImages({
      searchQuery,
      page,
    })
      /*.then(hits => {
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          page: prevState.page + 1,
        }));
      })*/
      .then(hits =>
        hits.length > 0
          ? this.setState(
              prevState => ({
                images: [
                  ...prevState.images,
                  ...hits,
                ],
                page:
                  prevState.page + 1,
              }),
            )
          : toast.warning(
              'Image not found!!!',
            ),
      )
      .catch(error =>
        console.log(error),
      )
      .finally(() => {
        this.setState({
          isLoading: false,
        });
      });
  };

  render() {
    const {
      images,
      isLoading,
      error,
      showModal,
      largeImageUrl,
    } = this.state;
    return (
      <div className="App">
        {error &&
          toast.error(
            'Error!!! Something went wrong.',
          )}

        <Searchbar
          onSubmit={this.handleSubmit}
        />

        {isLoading && <Loader />}

        {images.length > 0 && (
          <ImageGallery
            images={images}
            onClose={this.toggleModal}
          />
        )}

        {images.length > 11 && (
          <Button
            type="button"
            onClick={this.fetchImages}
          />
        )}

        {showModal && (
          <Modal
            onClose={this.toggleModal}
            largeImageUrl={
              largeImageUrl
            }
          />
        )}
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    );
  }
}

export default App;
