import s from "./ImageGalleryItem.module.css";
import PropTypes from "prop-types";

function ImageGalleryItem({ image, onClick }) {
  const { id, webformatURL, tags } = image;

  return (
    <li className={s.ImageGalleryItem} onClick={onClick} key={id}>
      <img
        className={s.ImageGalleryItem__image}
        src={webformatURL}
        alt={tags}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
