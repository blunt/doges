import React from 'react';

const Search = (props) => {
    return (
        <div className={"pl-2 w-3/4 ml-auto"}>
            <input
                className={"focus:outline-none md:text-2xl text-xl font-medium w-full"}
                placeholder={"Search for a dog"}
                type="text"
                value={props.query}
                onChange={e => props.queryChange(e.target.value)}
            />
        </div>
    )
}

export default Search;