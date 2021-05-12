import React from "react";
import { Link, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import GreetingContainer from "./greeting_container";
import LogInFormContainer from "./log_in_from_container";
import SignUpFormContainer from "./sign_up_from_container";

const App = () => (
    <div>
        <header>
            <h2>Robinhodl</h2>
            <GreetingContainer/>
        </header>
        <AuthRoute path="/login" component={ LogInFormContainer } />
        <AuthRoute path="/signup" component={ SignUpFormContainer } />
    </div>
);

export default App;
