import React from "react";
import ReactDOM from "react-dom";
import { logIn, logOut, signUp } from "./actions/session_actions";
// import { logIn, logOut, signUp } from "./util/session_api_util";
import configureStore from "./store/store";

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    window.store = store;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    
    const root = document.getElementById('root');
    const test = <div>This is the DOM</div>;
    const image = <div><img src={window.cannabisURL} /></div>
    

    // TAC
    window.signUp = signUp;
    window.logIn = logIn;
    window.logOut = logOut;

    // ReactDOM.render(<Root store={store} />, root);
    ReactDOM.render(image, root);
})