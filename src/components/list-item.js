import React, {useState, useEffect} from 'react';
import axios from "axios";

const ListItem = (props) => {
    const [image, setImage] = useState('')
    console.log('props', props.breed);

    const proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        apiUrl = 'https://api.thedogapi.com/v1/breeds',
        apiImageUrl = 'https://api.thedogapi.com/v1/images/search',
        apiKey = 'dda2eda4-5ec5-46d6-850f-ca0619ad7dd1';

    const getDoggoImage = async () => {
        const dogImage = await axios.get(proxyUrl + apiImageUrl, {
            params: {
                limit: null,
                apiKey: apiKey,
                breed_id: props.breed.id,
            }
        });

        console.log('dogs', dogImage)

        let url = ""

        if (dogImage.data.length > 0) {
            url = dogImage.data[0].url
        }

        console.log('url', url)
        setImage(url);
    }

    useEffect(() => {
        getDoggoImage();
    },[]);


    return (
        <li className={"w-1/4 px-4 mb-8"}>
            <div className={"overflow-hidden rounded-lg mb-2 h-48 bg-gray-200"}>
                { props.breed.image !== "" &&
                    <img
                        className={"h-64 w-full object-cover"}
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
