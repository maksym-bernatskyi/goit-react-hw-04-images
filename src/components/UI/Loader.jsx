import { TailSpin } from "react-loader-spinner";
import styles from "./UI.module.css";

const Loader = () => (
    <span className={styles.loader}>
        <TailSpin height="40" width="40" color="#fff" ariaLabel="loading" />
    </span>
);

export default Loader;