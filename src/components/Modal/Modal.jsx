import { useEffect } from "react";
import { createPortal } from "react-dom";
import { FiXCircle } from "react-icons/fi";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

export default function Modal({ type, tag, largeImage, onClose }) {
    useEffect(() => {
      window.addEventListener("keydown", handleKeydownClose);
      return window.removeEventListener("keydown", handleKeydownClose);
    });

    const handleKeydownClose = (event) => {
        if (event.code === "Escape") {
            onClose();
        }
    };

    const handleBackdropClick = (event) => {
        if (event.currentTarget === event.target) {
            onClose();
        }
    };

        return createPortal(
          <div onClick={handleBackdropClick} className={styles.ModalBackdrop}>
            <div className={styles.ImageModal}>
              <button onClick={onClose} className={styles.ButtonModal} type="button">
                <FiXCircle size="50px" />
              </button>
              <img src={largeImage} alt={type} />
              <span className={styles.TextImage}>{tag}</span>
            </div>
          </div>,
          modalRoot
        );
      }

Modal.propTypes = {
  type: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};