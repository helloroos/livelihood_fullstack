import React from "react";
import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Route, withRouter } from 'react-router-dom';

import LogInFormContainer from "./session/log_in_form_container";
import SignUpFormContainer from "./session/sign_up_form_container";
import SplashContainer from "./splash/splash_container";
import PortfolioContainer from "./portfolio/portfolio_container";
import TokenContainer from "./token/token_index_container";
import TokenShowContainer from "./token/token_show_container";
import NavBarContainer from "./navbar/navbar_container";
import TokenIndexContainer from "./token/token_index_container";
import CashContainer from "./cash/cash_container";

const App = () => {
    const NavBarContainerWithRouter = withRouter(NavBarContainer);
    const TokenContainerWithRouter = withRouter(TokenShowContainer);

    return(
    <div>
        <NavBarContainerWithRouter/>
        {/* <Route exact path="/" component={NavBarContainer } /> */}
        <Switch>
            <AuthRoute path="/login" component={ LogInFormContainer } />
            <AuthRoute path="/signup" component={ SignUpFormContainer } />
            <Route path="/portfolio" component={PortfolioContainer} />
            <Route exact path="/tokens" component={TokenIndexContainer} />
            <Route exact path="/cash" component={CashContainer} />
            {/* <Route path="/tokens" component={TokenContainer} /> */}
            <Route path="/tokens/:tokenId" component={TokenShowContainer} /> {/** Add in tokenId */}
            <Route exact path="/" component={ SplashContainer } />
        </Switch>
    </div>
    )
}

export default App;
