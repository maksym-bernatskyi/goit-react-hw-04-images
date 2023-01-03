import styles from "./ImageGallery.module.css";

const ImageGallery = ({ children }) => (
    <ul className={styles.imageGallery}>{children}</ul>
);

export default ImageGallery;