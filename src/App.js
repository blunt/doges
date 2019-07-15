import React from 'react';
import Header from "./components/header";
import List from "./components/list";

function App() {
    return (
        <div className={"flex relative items-start"}>
            <Header/>
            <List />
        </div>
    );
}

export default App;
