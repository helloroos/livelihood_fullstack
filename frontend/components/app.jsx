import React from "react";
import { Link } from 'react-router-dom';

const App = () => (
    <div>
        <Link to="/login">Log In</Link>
        <Link to="/signup">Sign Up</Link>
    </div>
);

export default App;
