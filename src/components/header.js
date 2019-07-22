import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className={"w-1/5 px-8 py-3 fixed top-0 left-0"}>
            <Link to="/" className={"focus:outline-none"}>
                <span className={"text-3xl block"} role="img" aria-label="dog">🐕</span>
            </Link>
        </header>
    )
}

export default Header;