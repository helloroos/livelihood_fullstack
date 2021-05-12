import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";

// TESTING -- TO BE REMOVED
import { logIn, logOut, signUp } from "./actions/session_actions";
// import { logIn, logOut, signUp } from "./util/session_api_util";

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();

    // TESTING START
    window.store = store;
    // window.getState = store.getState;
    // window.dispatch = store.dispatch;

    // const test = <div>This is the DOM</div>;
    // const image = <div><img src={window.cannabisURL} /></div>
    
    window.signUp = signUp;
    window.logIn = logIn;
    window.logOut = logOut;
    // TESTING END

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
    // ReactDOM.render(image, root);
})