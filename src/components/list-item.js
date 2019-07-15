import React from 'react';

const ListItem = (props) => {
    return (
        <li className={"w-1/4 px-4 mb-8"}>
            <div className={"overflow-hidden rounded-lg mb-2 h-48 bg-gray-200"}>
                { props.image != "" &&
                    <img
                        className={"h-64 w-full object-cover"}
                        src={props.image}
                        alt={"Picture of a " + props.name}
                    />
                }
            </div>
            <h3 className={"font-bold"}>{props.name}</h3>
        </li>
    );
}

export default ListItem;
