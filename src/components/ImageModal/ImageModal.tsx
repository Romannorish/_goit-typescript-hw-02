import ReactModal from "react-modal";
import css from "./ImageModal.module.css";
import { Image } from "../ImageGallery/ImageCard/ImageCard";
ReactModal.setAppElement("#root");

interface ImageModal {
  modalState: boolean;
  modalOnClose: () => void;
  image: Image;
}

export default function ImageModal({modalState, modalOnClose, image}:ImageModal) {
  return (
    <ReactModal
      isOpen={modalState}
      onRequestClose={modalOnClose}
      className={css.Modal}
      overlayClassName={css.Overlay}
    >
      <div className={css.imgContainer}>
        <img className={css.imgModal} src={image.urls.regular} alt={image.description} />
        <div className={css.box}>
          <p>
            <span className={css.descrColor}>Description:</span> {image.description}
          </p>
          <p>
            <span className={css.descrColor}>Likes:</span> {image.likes}
          </p>
        </div>
      </div>
    </ReactModal>
  );
}