import React from 'react';
import {withRouter, Link} from "react-router-dom";
import Back from "../assets/images/back.svg"

const PageHeader = (props) => {
    return (
        <div className={"header"}>
            {props.location.pathname === '/' ? (
                <h1>
                    {props.pageTitle}
                </h1>
            ) : (
                <div className={"flex items-center"}>
                    <Link className={"mr-4 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200"} to="/">
                        <img src={Back} alt=""/>
                    </Link>
                    <h1>
                        {props.pageTitle}
                    </h1>
                </div>
            )}
            {props.children}
        </div>
    )
}

export default withRouter(PageHeader);