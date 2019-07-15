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
    const [images, setImages] = useState({});
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [pageTitle, setPageTitle] = useState("All Dogs");
    const [query, setQuery] = useState("");
    const [filteredResults, setFilteredResults] = useState({breeds});

    const pageLimit = null;


     useEffect(() => {
        const callAPI = async () => {
            try {
                // Get Breeds
                const results = await axios.get(proxyUrl + apiUrl + '?api_key=' + apiKey, {
                    params: {
                        limit: null,
                        page: currentPage
                    }
                })
                setBreeds(results.data);
                console.log('results', results)

                // Get Images
                const images = await axios.get(proxyUrl + apiImageUrl + '?api_key=' + apiKey, {
                    params: {
                        limit: 100,
                        order: 'ASC'
                    }
                })
                setImages(images.data);
                console.log('images', images)
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }
        callAPI();
    }, []);


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
        if (query != "") {
            setPageTitle(filteredResults.length + ' dogs')
        } else {
            setPageTitle('All dogs')
        }
    }, [filteredResults]);


    console.log('current page', currentPage)
    // console.log('filteredResults', filteredResults.length)
    console.log('breeds', breeds)
    console.log('query', query)

    const List = () => {
        return (
        Array.from(filteredResults)
            .map(breed => {
                const image = images
                    .filter(image => image.breeds.length > 0)
                    .filter(image => image.breeds[0].id === breed.id)
                    .map(image => {
                        return (
                            image.length > 0 ? (
                                image[0].url
                            ) : (
                                image.url
                            )
                        )
                    });
                return (
                    <ListItem
                        key={breed.id}
                        name={breed.name}
                        image={image}
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