import {useEffect, useState} from "react";
import SearchBar from "./SearchBar/SearchBar";
import {fetchPhoto} from "../Servises/api";
import ImageGallery from "./ImageGallery/ImageGallery";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import Loader from "./Loader/Loader";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import {useToggle} from "./hooks/useToggle";
import ImageModal from "./ImageModal/ImageModal";
import toast from "react-hot-toast";
import { Image } from "./ImageGallery/ImageCard/ImageCard";

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [error, setError] = useState<boolean | string>(false);
  const [searchPhoto, setSearchPhoto] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [loadMoreBtn, setLoadMoreBtn] = useState<boolean>(false);
  const [info, setInfo] = useState<Image | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const per_page = 12;

  useEffect(() => {
    async function FetchData() {
      try {
        setError(false);
        setLoading(true);
        setLoadMoreBtn(false);
        const res = await fetchPhoto(currentPage, per_page, searchPhoto);
        if (res.total === 0) {
          setImages([]);
          setError(true);
        } else {
          setImages((prevImages) => [...prevImages, ...res.results]);
          if (currentPage < res.total_pages) {
            setLoadMoreBtn(true);
          } else {
            setLoadMoreBtn(false);
          }
        }
      } catch (err) {
        setError("error message");
        toast.error("Error fetching data!");
      } finally {
        setLoading(false);
      }
    }
    if (searchPhoto !== "") FetchData();
  }, [currentPage, searchPhoto]);

  const hundleSeach = (photo:string) => {
    if (photo !== "" && photo !== searchPhoto) {
      setSearchPhoto(photo);
      setCurrentPage(1);
      setImages([]);
    }
  };
  const hundlePagination = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  const {isOpen, open, close} = useToggle();
  const handleToggle = (image:Image) => {
    setInfo(image);
    open();
  };
  return (
    <>
      <SearchBar onSeach={hundleSeach} />
      {error && <ErrorMessage message={error} />}
      {loading && <Loader />}
      {images.length > 0 && <ImageGallery images={images} onToggle={handleToggle} />}
      {loadMoreBtn && <LoadMoreBtn onLoadMore={hundlePagination} />}
      {info && <ImageModal modalState={isOpen} modalOnClose={close} image={info} />}
    </>
  );
}

export default App;