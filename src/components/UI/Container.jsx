import styles from "./UI.module.css";

const Container = ({ children }) => {
    return <div className={styles.containerUi}>{children}</div>
};

export default Container;