import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ListItem from "./list-item";
import Loader from "./loader";
import Search from "./search";

const List = () => {

    const proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        apiUrl = 'https://api.thedogapi.com/v1/breeds',
        apiImageUrl = 'https://api.thedogapi.com/v1/images/search',
        apiKey = 'dda2eda4-5ec5-46d6-850f-ca0619ad7dd1';


    const [loading, setLoading] = useState(true);
    const [breeds, setBreeds] = useState([]);
    const [error, setError] = useState(null);
    const [pageTitle, setPageTitle] = useState("All dogs");
    const [query, setQuery] = useState("");
    const [filteredResults, setFilteredResults] = useState([]);


    const workflow = async () => {
      const allDogs = await axios.get(proxyUrl + apiUrl, {
          params: {
              limit: null,
              apiKey: apiKey,
          }
      });
      console.log('allDogs', allDogs.data);

      const allDogsIds = allDogs.data.map(d => { return d.id });
      console.log('allDogsIds', allDogsIds)

      let dogs = allDogs.data.map(d => {
          return {
              id: d.id,
              name: d.name,
          }
      })
      console.log('dogs', dogs)


    console.log('dogs', dogs)
    setFilteredResults(dogs);
    setLoading(false);
    };



    useEffect(() => {
        workflow();
    },[]);


    // useEffect(() => {
    //     setFilteredResults(breeds)
    //     console.log('filter', filteredResults)
    //     if (query !== "") {
    //         setFilteredResults(
    //             breeds.filter(breed =>
    //                 breed.name.toLowerCase().includes(query.toLowerCase())
    //             )
    //         );
    //     } else {
    //         setFilteredResults(breeds)
    //     }
    // }, [query]);

    // useEffect(() => {
        // if (query !== "") {
        //     setPageTitle(filteredResults.length + ' dogs')
        // } else {
        //     setPageTitle('All dogs')
        // }
    // }, [filteredResults]);


    const ListItems = () => {
        return (
            filteredResults
                .map((breed) => (
                    <ListItem
                        key={breed.id}
                        breed={breed}
                    />
                ))
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
            {!loading && filteredResults.length > 0 ? (
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
