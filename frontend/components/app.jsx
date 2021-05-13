import React from "react";
import { Switch } from 'react-router-dom';
import { AuthRoute } from "../util/route_util";
import { Route } from 'react-router-dom';

import LogInFormContainer from "./session/log_in_form_container";
import SignUpFormContainer from "./session/sign_up_form_container";
import SplashContainer from "./splash/splash_container";

const App = () => (
    <div>
        <Switch>
            <Route exact path="/" component={ SplashContainer } />
            <AuthRoute exact path="/login" component={ LogInFormContainer } />
            <AuthRoute exact path="/signup" component={ SignUpFormContainer } />
            {/* Create a route to the dashboard */}
        </Switch>
    </div>
);

export default App;
