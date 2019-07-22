import axios from "axios";
import {apiImageUrl, apiKey} from "../App";

let getDogImage;

getDogImage = async (breed_id) => {
    const dogImage = await axios.get(apiImageUrl, {
        params: {
            limit: 1,
            apiKey: apiKey,
            breed_id: breed_id,
        }
    });

    let url = ""

    if (dogImage.data.length > 0) {
        url = dogImage.data[0].url
        localStorage.setItem('dogImage' + breed_id, url);
    }

    return url;
};

export {getDogImage};