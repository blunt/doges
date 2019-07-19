import React, {useState, useEffect} from 'react';
import axios from "axios";

const ListItem = (props) => {
    const [image, setImage] = useState('')

    const proxyUrl = 'https://cors-anywhere.herokuapp.com/',
          apiImageUrl = proxyUrl + 'https://api.thedogapi.com/v1/images/search',
          apiKey = 'dda2eda4-5ec5-46d6-850f-ca0619ad7dd1';

    const getDogImage = async () => {
        const dogImage = await axios.get(apiImageUrl, {
            params: {
                limit: 1,
                apiKey: apiKey,
                breed_id: props.breed.id,
            }
        });

        let url = ""

        if (dogImage.data.length > 0) {
            url = dogImage.data[0].url
        }

        setImage(url);
    }

    useEffect(() => {
        getDogImage();
    },[]);


    return (
        <li className={"w-1/4 px-4 mb-8"}>
            <div className={"overflow-hidden rounded-lg mb-2 h-48 bg-gray-200"}>
                {image !== "" &&
                <img
                    className={"h-64 w-full object-cover fade"}
                    src={image}
                    alt={"Picture of a " + props.breed.name}
                />
                }
            </div>
            <h3 className={"font-bold"}>{props.breed.name}</h3>
        </li>
    );
}

export default ListItem;
