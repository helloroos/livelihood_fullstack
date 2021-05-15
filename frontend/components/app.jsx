import React from "react";
import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Route, withRouter } from 'react-router-dom';

import LogInFormContainer from "./session/log_in_form_container";
import SignUpFormContainer from "./session/sign_up_form_container";
import SplashContainer from "./splash/splash_container";
import PortfolioContainer from "./portfolio/portfolio_container";
import TokenContainer from "./token/token_container";
import NavBarContainer from "./navbar.jsx/navbar_container";


const App = () => {
    const NavBarContainerWithRouter = withRouter(NavBarContainer);

    return(
    <div>
        <NavBarContainerWithRouter/>
        {/* <Route exact path="/" component={NavBarContainer } /> */}
        <Switch>
            <AuthRoute exact path="/login" component={ LogInFormContainer } />
            <AuthRoute exact path="/signup" component={ SignUpFormContainer } />
            <Route path="/portfolio" component={PortfolioContainer} />
            <Route path="/token" component={TokenContainer} />
            <Route exact path="/" component={ SplashContainer } />
        </Switch>
    </div>
    )
}

export default App;
