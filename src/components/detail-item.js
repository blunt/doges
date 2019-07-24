import React from 'react';

const DetailItem = (props) => {
    return (
        <div className={"flex flex-wrap md:text-lg mb-4 border-black"}>
            <p className={"w-1/4 font-bold"}>{props.label}</p>
            <p className={"pl-8 w-3/4 pl-2 ml-auto md:text-left text-right"}>{props.detail}</p>
        </div>
    )
}

export default DetailItem;