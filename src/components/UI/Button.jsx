import PropTypes from "prop-types";
import styles from "./UI.module.css";

const Button = ({ onClick, children }) => (
    <button className={styles.ButtonLoadMore} onClick={onClick} type="button">
        {children}
    </button>
);

export default Button;

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
};