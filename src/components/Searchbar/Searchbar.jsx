
import { useState } from "react";
import { toast } from "react-toastify";
import { BsSearch } from "react-icons/bs";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Searchbar.module.css";

export default function Searchbar({ onFormSubmit }) {
    const [imageName, setImageName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (imageName.trim() === "") {
            toast.error("Please enter the name!");
            return;
        }

        onFormSubmit(imageName);
        setImageName("");
    };

        return (
        <header className={styles.searchbar}>
            <form className={styles.searchForm} onSubmit={handleSubmit}>
                <button type="submit" className={styles.searchFormButton}>
                    <BsSearch size="20px" />
                    <span className={styles.searchFormButtonLabel}></span>
                </button>

            <input
                onChange={(event) => setImageName(event.currentTarget.value.toLowerCase())}
                className={styles.searchFormInput}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
            />
            </form>
        </header>
        );
    }