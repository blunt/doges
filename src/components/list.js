import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ListItem from "./list-item";
import Loader from "./loader";
import Search from "./search";

const List = () => {

    const proxyUrl = 'https://cors-anywhere.herokuapp.com/',
          apiUrl = proxyUrl + 'https://api.thedogapi.com/v1/breeds',
          apiKey = 'dda2eda4-5ec5-46d6-850f-ca0619ad7dd1';

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [pageTitle, setPageTitle] = useState("All dogs");
    const [query, setQuery] = useState("");
    const [allDogs, setAllDogs] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);

    let dogs;

    const workflow = async () => {
        try {
            const allDogs = await axios.get(apiUrl, {
                params: {
                limit: null,
                apiKey: apiKey,
                }
            });

            dogs = allDogs.data.map(d => {
                return {
                    id: d.id,
                    name: d.name,
                }
            });

            setAllDogs(dogs);
            setFilteredResults(dogs);
            setLoading(false);
        } catch {
            setError(true);
            setLoading(false);

        }

    }



    useEffect(() => {
        workflow();
    },[]);


    useEffect(() => {
        if (query !== "") {
            setFilteredResults(
                allDogs.filter(dog =>
                    dog.name.toLowerCase().includes(query.toLowerCase())
                )
            );
        } else {
            setFilteredResults(allDogs);
        }
    }, [query]);

    useEffect(() => {
        if (query !== "") {
            setPageTitle(filteredResults.length + ' dogs')
        } else {
            setPageTitle('All dogs')
        }
    }, [filteredResults]);


    const ListItems = () => {
        return (
            filteredResults
                .map((dog) => (
                    <ListItem
                        key={dog.id}
                        breed={dog}
                        query={query}
                    />
                ))
        )
    }

    return (
        <div className={"w-4/5 relative"}>
            <div className={"flex items-center sticky top-0 left-0 right-0 px-8 py-4 bg-white z-10"}>
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
                    <ListItems />
                </ul>
            ) : (
                <Loader />
            )}
        </div>
    );
}

export default List;
