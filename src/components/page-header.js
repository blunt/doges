import React from 'react';
import {withRouter, Link} from "react-router-dom";

const PageHeader = (props) => {
    return (
        <div className={"header"}>
            {props.location.pathname === '/' ? (
                <h1>
                    {props.pageTitle}
                </h1>
            ) : (
                <Link to="/">
                    {props.pageTitle}
                </Link>
            )}
            {props.children}
        </div>
    )
}

export default withRouter(PageHeader);