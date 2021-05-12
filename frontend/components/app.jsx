import React from "react";
import { Link, Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import GreetingContainer from "./greeting_container";
import LogInFormContainer from "./log_in_from_container";
import SignUpFormContainer from "./sign_up_from_container";
import SplashContainer from "./splash/splash_container";

const App = () => (
    <div>
        <Switch>
            <AuthRoute exact path="/" component={ SplashContainer } />
            <AuthRoute path="/login" component={ LogInFormContainer } />
            <AuthRoute path="/signup" component={ SignUpFormContainer } />
        </Switch>
    </div>
);

export default App;
