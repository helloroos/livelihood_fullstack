import React from "react";
import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Route, withRouter } from 'react-router-dom';

import LogInForm from "./session/log_in_form";
import sign_up_form from "./session/sign_up_form";
import splash from "./splash/splash";
import portfolio from "./portfolio/portfolio";
import TokenShow from './token/token'
import Navbar from "./navbar/navbar";
import TokenIndexContainer from "./token/token_index_container";
import Cash from './cash/cash'

const App = () => {
    const NavBarContainerWithRouter = withRouter(Navbar);
    const TokenContainerWithRouter = withRouter(TokenShow);

    return(
    <div id="app">
        <NavBarContainerWithRouter/>
        <Switch>
            <AuthRoute path="/login" component={LogInForm} />
            <AuthRoute path="/signup" component={sign_up_form} />
            <ProtectedRoute path="/portfolio" component={portfolio} />
            <ProtectedRoute exact path="/tokens" component={TokenIndexContainer} />
            <ProtectedRoute exact path="/cash" component={Cash} />
            <ProtectedRoute path="/tokens/:tokenId" component={TokenShow} /> {/** Add in tokenId */}
            <Route exact path="/" component={splash} />
        </Switch>
    </div>
    )
}

export default App;
