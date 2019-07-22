import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import {getDogImage} from "../services/DogImage";

const ListItem = (props) => {
    const [image, setImage] = useState('')

    const url = props.breed.name.toLowerCase().replace(/ /g, "-");

    useEffect(() => {
        if (localStorage.getItem('dogImage' + props.breed.id) === null) {
            const getImage = getDogImage(props.breed.id).then((imageUrl) => {
                setImage(imageUrl);
            });
        } else {
            setImage(localStorage.getItem('dogImage' + props.breed.id));
        }
    },[]);

    return (
        <li className={"w-1/4 px-4 mb-8"}>
            <Link to={'/' + url}>
                <div className={"overflow-hidden rounded-lg mb-2 h-48 bg-gray-200"}>
                    {image !== "" &&
                        <img
                            className={"h-full w-full object-cover fade"}
                            src={image}
                            alt={"Picture of a " + props.breed.name}
                        />
                    }
                </div>
                <h3 className={"font-bold"}>{props.breed.name}</h3>
            </Link>
        </li>
    );
}

export default ListItem;
