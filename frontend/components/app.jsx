import React from "react";
import { Link } from 'react-router-dom';
import GreetingContainer from "./greeting_container";


const App = () => (
    <div>
        <header>
            <h2>Robinhodl</h2>
            <GreetingContainer/>
        </header>
    </div>
);

export default App;
