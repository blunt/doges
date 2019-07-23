import React from 'react';
import {withRouter, Link} from "react-router-dom";

const PageHeader = (props) => {
    return (
        <div className={"flex items-center sticky top-0 left-0 right-0 md:px-8 px-6 py-4 bg-white z-20"}>
            {props.location.pathname === '/' ? (
                <h1>
                    {props.pageTitle}
                </h1>
            ) : (
                <div className={"flex items-center"}>
                    <Link className={"md:mr-4 mr-2 md:w-10 w-6 md:h-10 p-1 h-6 flex items-center justify-center rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-200"} to="/">
                        <svg className={"md:w-auto w-full h-auto"} width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 9C20 9.44203 19.8244 9.86595 19.5118 10.1785C19.1993 10.4911 18.7754 10.6667 18.3333 10.6667H6.39667L10.2558 14.4883C10.4106 14.6431 10.5333 14.8269 10.617 15.0291C10.7008 15.2313 10.7438 15.4481 10.7438 15.667C10.7438 15.8858 10.7006 16.1026 10.6168 16.3048C10.533 16.507 10.4102 16.6907 10.2554 16.8454C10.1006 17.0002 9.91686 17.1229 9.71463 17.2066C9.5124 17.2903 9.29566 17.3334 9.07679 17.3334C8.85791 17.3333 8.64119 17.2902 8.43899 17.2064C8.23679 17.1226 8.05307 16.9998 7.89833 16.845L0 9L7.89833 1.155C8.21085 0.842378 8.63475 0.666704 9.07679 0.666626C9.51883 0.666548 9.94279 0.842072 10.2554 1.15459C10.568 1.4671 10.7437 1.891 10.7438 2.33304C10.7439 2.77508 10.5683 3.19904 10.2558 3.51167L6.39667 7.33334H18.3333C18.7754 7.33334 19.1993 7.50893 19.5118 7.82149C19.8244 8.13405 20 8.55797 20 9Z" fill="currentColor"/>
                        </svg>
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