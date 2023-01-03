const BASE_URL = "https://pixabay.com/api/";

export function fetchImage(query, page = 1) {
    const options = new URLSearchParams({
        key: "30579822-7048314e53034861817646057",
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        per_page: 12,
        page: page,
    });

    const url = `${BASE_URL}?${options}`;

    return fetch(url).then((response) => {
        if (!response.ok) {
            return Promise.reject(new Error("Images not found!"));
        }
        return response.json();
    });
}