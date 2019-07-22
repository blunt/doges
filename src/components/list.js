import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {apiUrl, apiKey } from '../App';
import ListItem from "./list-item";
import Loader from "./loader";
import Search from "./search";
import PageHeader from "./page-header";

const List = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [pageTitle, setPageTitle] = useState("All dogs");
    const [query, setQuery] = useState("");
    const [allDogs, setAllDogs] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);

    let dogs;

    const getDogs = async () => {
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
        getDogs();
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
        <div className={"container"}>
            <PageHeader pageTitle={pageTitle}>
                <Search
                    query={query}
                    queryChange={setQuery}
                />
            </PageHeader>
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
