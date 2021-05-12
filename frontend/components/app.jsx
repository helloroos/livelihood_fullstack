import React from "react";
import { Switch } from 'react-router-dom';
import { AuthRoute } from "../util/route_util";

import LogInFormContainer from "./session/log_in_form_container";
import SignUpFormContainer from "./session/sign_up_form_container";
import SplashContainer from "./splash_container";

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
