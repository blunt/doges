import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ListItem from "./list-item";
import Loader from "./loader";
import Search from "./search";

const proxyUrl = 'https://cors-anywhere.herokuapp.com/',
      apiUrl = 'https://api.thedogapi.com/v1/breeds',
      apiImageUrl = 'https://api.thedogapi.com/v1/images/search',
      apiKey = 'dda2eda4-5ec5-46d6-850f-ca0619ad7dd1';

const List = () => {

    const [loading, setLoading] = useState(true);
    const [breeds, setBreeds] = useState({});
    const [error, setError] = useState(null);
    const [pageTitle, setPageTitle] = useState("All dogs");
    const [query, setQuery] = useState("");
    const [filteredResults, setFilteredResults] = useState({breeds});

    let dogs = []

    async function asyncForEach(array, callback) {
        for (let index = 0; index < array.length; index++) {
            await callback(array[index], index, array);
        }
    }

    const callAPI = async () => {
        try {
            // Get Breeds
            const results = await axios.get(proxyUrl + apiUrl, {
                params: {
                    limit: null,
                    apiKey: apiKey,
                }
            });


            results.data.forEach(function(result) {
                const dog = Object.create(null);
                dog.name = result.name
                dog.id = result.id
                dogs.push(dog);
            });


            try {
                // Get Images
                const start = async () => {
                    await asyncForEach(dogs, async (dog) => {
                        const image = await axios.get(proxyUrl + apiImageUrl, {
                            params: {
                                limit: 1,
                                apiKey: apiKey,
                                breed_id: dog.id,
                            }
                        });
                        if (image.data.length > 0) {
                            dog.image = image.data[0].url
                        }
                        return image;
                    });
                }
                start();
            } catch (error) {
                setError(error);
            }
            setLoading(false);
            return results;
        } catch (error) {
            setError(error);
        }
    }

    callAPI();

    useEffect(() => {
        setBreeds(dogs);
    },[]);


    useEffect(() => {

        if (query != "") {
            setFilteredResults(
                breeds.filter(breed =>
                    breed.name.toLowerCase().includes(query.toLowerCase())
                )
            );
        } else {
            setFilteredResults(breeds);
        }
    }, [breeds, query]);

    useEffect(() => {
        if (query !== "") {
            setPageTitle(filteredResults.length + ' dogs')
        } else {
            setPageTitle('All dogs')
        }
    }, [filteredResults]);


    const List = () => {
        return (
        filteredResults
            .map(breed => {
                return (
                    <ListItem
                        key={breed.id}
                        breed={breed}
                        image={breed.image}
                    />
                )
            })
        )
    }

    return (
        <div className={"w-4/5 relative"}>
            <div className={"flex items-center sticky top-0 left-0 right-0 px-8 py-4 bg-white"}>
                <h1 className={"text-2xl font-bold"}>
                    {pageTitle}
                </h1>
                <Search
                    query={query}
                    queryChange={setQuery}
                />
            </div>
            {!loading ? (
                <ul className={"flex flex-wrap py-8 px-4"}>
                    <List />
                </ul>
            ) : (
                <Loader />
            )}
        </div>
    );
}

export default List;