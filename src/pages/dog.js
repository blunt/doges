import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {apiKey, dogEndpoint} from '../App';
import Loader from "../components/loader";
import PageHeader from "../components/page-header";
import {getDogImage} from "../services/DogImage";
import DetailItem from "../components/detail-item";

const Dog = ({match}) => {
    const [loading, setLoading] = useState(true);
    const [dog, setDog] = useState({});
    const [image, setImage] = useState('');

    // TODO some dogs have a dash in their name resulting in 404 when replaced with space
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
            setLoading(false);
        }

    }

    useEffect(() => {
        getDog();
    });

    useEffect(() => {
        // document.title = dog.name + " – Doges";
        if (localStorage.getItem('dogImage' + dog.id) === null) {
            getDogImage(dog.id).then((url) => {
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
                    <PageHeader pageTitle={dog.name} />
                    <section className={"pt-2 pb-4 md:px-8 px-6"}>
                        <div className={"flex flex-wrap"}>
                            {/*TODO: remove image if dog image isn't there*/}
                            <div className={"lg:w-1/2 overflow-hidden rounded-lg mb-8 dog-image relative bg-gray-200 border-4 border-gray-200"}>
                                {image !== "" &&
                                    <img
                                        className={"object-cover object-top fade w-full h-full"}
                                        src={image}
                                        alt={"Picture of a " + dog.name}/>
                                }
                            </div>
                            <section className={"lg:w-1/2 md:pb-12 lg:pl-8 pb-6"}>
                                {dog.bred_for &&
                                    <DetailItem
                                        label="Bred for"
                                        detail={dog.bred_for}
                                    />
                                }
                                {dog.breed_group &&
                                    <DetailItem
                                        label="Breed group"
                                        detail={dog.breed_group}
                                    />
                                }
                                {dog.origin &&
                                    <DetailItem
                                        label="Origin"
                                        detail={dog.origin}
                                    />
                                }
                                {dog.life_span &&
                                    <DetailItem
                                        label="Life span"
                                        detail={dog.life_span}
                                    />
                                }
                                {dog.temperament &&
                                    <DetailItem
                                        label="Temperament"
                                        detail={dog.temperament}
                                    />
                                }
                                {dog.height &&
                                    <DetailItem
                                        label="Height"
                                        detail={dog.height.imperial + " inches"}
                                    />
                                }
                                {dog.weight &&
                                    <DetailItem
                                        label="Weight"
                                        detail={dog.weight.imperial + " pounds"}
                                    />
                                }
                            </section>
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
