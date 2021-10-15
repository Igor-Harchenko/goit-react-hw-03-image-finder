import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, onSelect }) => {
  return (
    <ul className={s.ImageGallery}>
      {images.map((image, id) => (
        <ImageGalleryItem
          key={id}
          image={image}
          onClick={() => onSelect(image)}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  onSelect: PropTypes.func,
};

export default ImageGallery;
