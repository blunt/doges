import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className={"w-11/12 md:px-8 px-6 py-3 lg:fixed top-0 left-0"}>
            <Link to="/" className={"focus:outline-none"}>
                <span className={"text-3xl block"} role="img" aria-label="dog">🐕</span>
            </Link>
        </header>
    )
}

export default Header;