import React from 'react';
import Home from "./pages/home";
import Dog from "./pages/dog";
import Header from "./components/header";
import {HashRouter as Router, Route } from "react-router-dom";

export const proxyUrl = 'https://cors-anywhere.herokuapp.com/',
             apiUrl = proxyUrl + 'https://api.thedogapi.com/v1/breeds',
             apiImageUrl = proxyUrl + 'https://api.thedogapi.com/v1/images/search',
             dogEndpoint = 'https://api.thedogapi.com/v1/breeds/search',
             apiKey = 'dda2eda4-5ec5-46d6-850f-ca0619ad7dd1';

function App() {
    return (
        <Router basename={'/'}>
            <Header/>
            <Route exact path={'/'} component={Home} />
            <Route path={'/:id'} component={Dog} />
        </Router>
    );
}

export default App;
