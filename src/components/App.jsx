import { useState, useEffect } from "react";
import Searchbar from "./Searchbar";
import SearchInfo from "./SearchInfo";
import { ToastContainer } from "react-toastify";
import { fetchImage } from "./services/Api";

export default function App() {
  const [imageName, setImageName] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const handleFormSubmit = (inputValueName) => {
    setImageName(inputValueName);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prevState) => prevState + 1);
  };

  useEffect(() => {
    if (!imageName) {
      return;
    }

    setStatus("pending");

    fetchImage(imageName, page).then((data) => {
      setImages((prevState) => [...prevState, ...data.hits]);
      setStatus("resolved");
    }).catch((error) => {
      setError(error);
      setStatus("rejected");
    });
  }, [imageName, page]);

    return (
      <>
        <Searchbar onFormSubmit={handleFormSubmit} />
          <div className="container">
            <SearchInfo 
            imageName={imageName}
            error={error}
            images={images}
            onLoadMore={handleLoadMore}
            status={status}
            />
          </div>
        <ToastContainer autoClose={3000} />
      </>
    );
  }