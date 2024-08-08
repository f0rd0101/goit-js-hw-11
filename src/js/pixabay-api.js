export function searchGalleryQuery(query) {
        const URL = "https://pixabay.com/api/";
        const API_KEY = "45308830-5ee60b80cbe440cd28e45e3ae";
    
        return fetch(`${URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.status);
                }
                return response.json();
            })
            .catch((error) => {
            console.log(error);
        })
    }