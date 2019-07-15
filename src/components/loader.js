import React from 'react';

const Loader = () => {
    return (
        <div className={'px-8'}>
            <div className="spinner">
                <div className="bounce1"></div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
            </div>
        </div>
    )
}

export default Loader;