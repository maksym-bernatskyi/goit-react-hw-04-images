import { AiFillLike } from "react-icons/ai";
import { ImDownload2, ImEye } from "react-icons/im";
import { FaComment } from "react-icons/fa";
import PropTypes from "prop-types";
import styles from "../ImageGalleryItem/ImageGalleryItem.module.css";

const ImageGalleryItem = ({ data, onImageClick }) => {
    const { webformatURL, largeImageURL, type, tags, likes, views, comments, downloads } = data;
    const fullImage = () => onImageClick(largeImageURL, tags, type);

    return (
        <li className={styles.imageGalleryItem}>
            <img
            className={styles.imageGalleryItemImage}
            src={webformatURL}
            alt={type}
            onClick={fullImage}
            />
        <div className={styles.metaContainer}>
        <p className={styles.dataMeta}>
            <AiFillLike size="25px" />
            <span className={styles.dataMetaText}>{likes}</span>
        </p>
        <p className={styles.dataMeta}>
            <ImEye size="25px" />
            <span className={styles.dataMetaText}>{views}</span>
        </p>
        <p className={styles.dataMeta}>
            <FaComment size="25px" />
            <span className={styles.dataMetaText}>{comments}</span>
        </p>
        <p className={styles.dataMeta}>
            <ImDownload2 size="25px" />
            <span className={styles.dataMetaText}>{downloads}</span>
        </p>
        </div>
        </li>
    );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
    data: PropTypes.object.isRequired,
    onImageClick: PropTypes.func.isRequired,
};