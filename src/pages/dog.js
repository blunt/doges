import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {apiKey, dogEndpoint} from '../App';
import Loader from "../components/loader";
import PageHeader from "../components/page-header";
import {getDogImage} from "../services/DogImage";

const Dog = ({match}) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [dog, setDog] = useState({});
    const [image, setImage] = useState('');

    const breed_name = match.params.id.toUpperCase().replace(/-/g, " ")

    const getDog = async () => {
        try {
            const dog = await axios.get(dogEndpoint, {
                params: {
                    q: breed_name,
                    apiKey: apiKey,
                }
            });

            setDog(dog.data[0]);
            setLoading(false);
        } catch {
            setError(true);
            setLoading(false);
        }

    }

    useEffect(() => {
        getDog();
    },[]);

    useEffect(() => {
        if (localStorage.getItem('dogImage' + dog.id) === null) {
            const getImage = getDogImage(dog.id).then((url) => {
                setImage(url);
            });
        } else {
            setImage(localStorage.getItem('dogImage' + dog.id));
        }
    },[dog]);

    return (
        <div className={"container"}>
            {!loading ? (
                <div>
                    <PageHeader pageTitle={'All dogs'}>
                        <div className={"pl-2 w-3/4 ml-auto"}>
                            <h1>{dog.name}</h1>
                        </div>
                    </PageHeader>
                    <section className={"py-8 px-8"}>
                        <div className={"pl-2 w-3/4 ml-auto"}>
                            <div className={"overflow-hidden rounded-lg mb-2 h-48 dog-image relative bg-gray-200"}>
                                <img className={"object-cover fade"} src={image} alt={"Picture of a " + dog.name} />
                            </div>
                            <h1>{dog.life_span}</h1>
                        </div>
                    </section>
                </div>
            ) : (
                <Loader />
            )}
        </div>
    );
}

export default Dog;
