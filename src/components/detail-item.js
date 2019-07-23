import React from 'react';

const DetailItem = (props) => {
    return (
        <div className={"flex text-lg mb-4 pb-4 border-b border-gray-200"}>
            <p className={"w-1/4 font-bold"}>{props.label}</p>
            <p className={"w-3/4 pl-2 ml-auto"}>{props.detail}</p>
        </div>
    )
}

export default DetailItem;