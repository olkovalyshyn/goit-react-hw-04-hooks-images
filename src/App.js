import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Loader from "react-loader-spinner";

import ImageGallery from "./components/ImageGallery";
import Searchbar from "./components/Searchbar";
import api from "./services/galleryApi";
import Button from "./components/Button";
import Modal from "./components/Modal";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [images, setImages] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [isloading, setIsloading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImage, setLargeImage] = useState({});

  useEffect(() => {
    if (inputValue === "") {
      return;
    }
    setIsloading(true);

    setTimeout(() => {
      fetchImages();
    }, 1000);
  }, [inputValue, pageNumber]);

  const fetchImages = () => {
    api
      .fetchGallery(inputValue, pageNumber)
      .then((img) => {
        setImages([...images, ...img]);
        setPageNumber(pageNumber);
      })
      .finally(setIsloading(false));
  };

  const incomingValueFromInput = (value) => {
    setInputValue(value);
    setPageNumber(1);
    setImages([]);
  };

  const loadMore = () => {
    setPageNumber((prevState) => prevState + 1);
    hundleScrollTo();
  };

  const hundleScrollTo = () => {
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }, 2500);
  };

  const openModal = (event) => {
    setShowModal(true);
    setLargeImage(event.target.dataset.largeImgForModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Searchbar onSubmit={incomingValueFromInput} />

      {inputValue && <ImageGallery images={images} onOpenModal={openModal} />}

      {images.length > 0 && <Button onClickButton={loadMore} />}

      {isloading && (
        <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
      )}

      {showModal && (
        <Modal onClose={closeModal}>
          <img src={largeImage} alt="" />
        </Modal>
      )}

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

// class OldApp extends Component {
// +  state = {
//     inputValue: "",
//     images: [],
//     pageNumber: 1,
//     isloading: false,
//     showModal: false,
//     largeImage: {},
//   };

//  + componentDidUpdate(prevProps, prevState) {
//     if (
//       prevState.inputValue !== this.state.inputValue ||
//       prevState.pageNumber !== this.state.pageNumber
//     ) {
//       this.setState({ isloading: true });

//       // setTimeout for a test (visible) component Loader
//       setTimeout(() => {
//         this.fetchImages();
//       }, 1000);
//     }
//   }

//   fetchImages() {
//     const { inputValue, pageNumber } = this.state;

//     api
//       .fetchGallery(inputValue, pageNumber)
//       .then((img) => {
//         this.setState({
//           images: [...this.state.images, ...img],
//           pageNumber: pageNumber,
//         });
//       })
//       .finally(this.setState({ isloading: false }));
//   }

//   incomingValueFromInput = (value) => {
//     this.setState({ inputValue: value, pageNumber: 1, images: [] });
//   };

//   loadMore = () => {
//     this.setState((prevState) => ({ pageNumber: prevState.pageNumber + 1 }));
//     this.hundleScrollTo();
//   };

//   hundleScrollTo = () => {
//     setTimeout(() => {
//       window.scrollTo({
//         top: document.documentElement.scrollHeight,
//         behavior: "smooth",
//       });
//     }, 2500);
//   };

//   openModal = (event) => {
//     this.setState({
//       showModal: true,
//       largeImage: event.target.dataset.largeImgForModal,
//     });
//   };

//   closeModal = () => {
//     this.setState({ showModal: false });
//   };

//   render() {
//     return (
//       <>
//         <Searchbar onSubmit={this.incomingValueFromInput} />

//         {this.state.inputValue && (
//           <ImageGallery
//             images={this.state.images}
//             onOpenModal={this.openModal}
//           />
//         )}

//         {this.state.images.length > 0 && (
//           <Button onClickButton={this.loadMore} />
//         )}

//         {this.state.isloading && (
//           <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
//         )}

//         {this.state.showModal && (
//           <Modal onClose={this.closeModal}>
//             <img src={this.state.largeImage} alt="" />
//           </Modal>
//         )}

//         <ToastContainer
//           position="top-center"
//           autoClose={3000}
//           hideProgressBar={false}
//           newestOnTop={false}
//           closeOnClick
//           rtl={false}
//           pauseOnFocusLoss
//           draggable
//           pauseOnHover
//         />
//       </>
//     );
//   }
// }

// export default App;
