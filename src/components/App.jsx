import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Oval } from 'react-loader-spinner';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import getAxiosTag from './servise/Api';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import styled from 'styled-components';

const SpinnerWrepper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
`;
export class App extends Component {
  state = {
    listImages: [],
    searchImage: '',
    page: 2,
    loading: false,
    selectImages: null,
  };
  async componentDidUpdate(prevProps, prevState) {
    const { searchImage } = this.state;
    const { page } = this.state;
    console.log(page);
    console.log(searchImage);
    console.log(prevState.searchImage !== searchImage);
    if (prevState.searchImage !== searchImage) {
      this.setState({ loading: true });
      try {
        const listImages = await getAxiosTag(searchImage, page);
        this.setState({
          listImages: listImages.hits,
          loading: false,
        });
        console.log(listImages);
        console.log(listImages.hits);
        return;
      } catch (error) {
        console.log(error);
      }
    }
  }
  handleLoadMore = () => {
    console.log('sdfargerthaerhd');
  };
  handleSearchBar = imageName => {
    this.setState({ searchImage: imageName });
  };
  selectImages = largeImageURL => {
    this.setState({ selectImages: largeImageURL });
    console.log(this.state.selectImages);
  };
  render() {
    const { loading, searchImage, listImages, selectImages } = this.state;
    return (
      <>
        <Searchbar onSearch={this.handleSearchBar} />
        <Button onClick={this.handleLoadMore} />
        {loading && (
          <SpinnerWrepper>
            <Oval
              ariaLabel="loading-indicator"
              height={70}
              width={70}
              strokeWidth={4}
              color="gray"
              secondaryColor="yellow"
            />
          </SpinnerWrepper>
        )}
        <ImageGallery
          listImages={listImages}
          searchImage={searchImage}
          onSelectImage={this.selectImages}
        />
        <Modal url={selectImages} />
        <ToastContainer position="top-center" autoClose={2000} />
      </>
    );
  }
}
// {
//   /* // <ImageGallery /> */
// }
// default App;
// key=24377768-1651c24dae1d00899e27f41ae
// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
// https://pixabay.com/api/?q=cat&page=1&key=24377768-1651c24dae1d00899e27f41ae&image_type=photo&orientation=horizontal&per_page=12
// async componentDidMount() {
//   this.setState({ loading: true });
//   try {
//     const listImages = await getAxiosTag();
//     this.setState({
//       listImages: listImages.hits,
//       loading: false,
//     });
//     console.log(listImages);
//     console.log(listImages.hits);
//   } catch (error) {
//     console.log(error);
//   }
// }
// componentDidUpdate(prevProps, prevState) {
//   // console.log(prevProps);
//   if (this.state.searchImage !== prevState.searchImage)
//     console.log(this.state.searchImage);
//   console.log(prevState.searchImage);

//   console.log(this.state);
// }
