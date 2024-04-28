import css from "./ImageCard.module.css";

export type Image = {
  id?: number
  urls: {
    regular: string
    small: string
  }
  likes: number
  description: string
}

export type PropTypes = {
  image: Image
  onToggle: (image: Image) => void
}
export default function ImageCard({image: {urls, likes, description}, onToggle}: PropTypes) {


const imageInfo = {
    urls: {
      regular: urls.regular,
      small: urls.small,
    },
    likes:likes ,
    description:description,
  };
  return (
    <div
      className={css.imageContainer}
      onClick={() => {
        onToggle(imageInfo);
      }}
    >
      <img width={350} src={urls.small} alt="photo" />
    </div>
  );
}