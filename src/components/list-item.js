import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import {getDogImage} from "../services/DogImage";

const ListItem = (props) => {
    const [image, setImage] = useState('')

    const url = props.breed.name.toLowerCase().replace(/ /g, "-");

    useEffect(() => {
        if (localStorage.getItem('dogImage' + props.breed.id) === null) {
            getDogImage(props.breed.id).then((imageUrl) => {
                setImage(imageUrl);
            });
        } else {
            setImage(localStorage.getItem('dogImage' + props.breed.id));
        }
    },[props.breed.id]);

    return (
        <li className={"md:w-1/4 w-1/2 md:px-4 px-2 md:mb-8 mb-4"}>
            <Link to={'/' + url}>
                <div className={"overflow-hidden rounded-lg mb-2 h-48 bg-gray-200 border-4 border-gray-200"}>
                    {image !== "" &&
                        <img
                            className={"h-full w-full object-cover object-top fade"}
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
