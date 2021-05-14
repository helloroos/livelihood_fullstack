import React from "react";
import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Route } from 'react-router-dom';

import LogInFormContainer from "./session/log_in_form_container";
import SignUpFormContainer from "./session/sign_up_form_container";
import SplashContainer from "./splash/splash_container";
import PortfolioContainer from "./portfolio/portfolio_container";


const App = () => (
    <div>
        <Switch>
            <AuthRoute exact path="/login" component={ LogInFormContainer } />
            <AuthRoute exact path="/signup" component={ SignUpFormContainer } />
            {/* <ProtectedRoute exact path="/portfolio" component={ PortfolioContainer } /> */}
            <Route exact path="/" component={ SplashContainer } />
        </Switch>
    </div>
);

export default App;
