import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";

// TESTING -- TO BE REMOVED
import { logIn, logOut, resetErrors, signUp } from "./actions/session_actions";
import { fetchToken, fetchTokens } from "./actions/token_actions";
// import { logIn, logOut, signUp } from "./util/session_api_util";

document.addEventListener('DOMContentLoaded', () => {
    // let store;
    // if (window.currentUser) {
    //     const { currentUser } = window;
    //     const { id } = currentUser;
    //     const preloadedState = {
    //         entities: {
    //             users: {
    //                 [id]: currentUser
    //             }
    //         },
    //   session: { currentUser: id }
    //     };
    //     store = configureStore(preloadedState);

    //     delete window.currentUser;

    // } else {
    //     store = configureStore();
    // }

    let store;
    if (window.currentUser) {
        const preloadedState = { session: { currentUser: window.currentUser } };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    // TESTING START
    window.store = store;
    // window.dispatch = store.dispatch;
    // window.getState = store.dispatch;

    // const test = <div>This is the DOM</div>;
    // const image = <div><img src={window.cannabisURL} /></div>
    
    window.signUp = signUp;
    window.logIn = logIn;
    window.logOut = logOut;
    window.resetErrors = resetErrors;
    window.fetchToken = fetchToken;
    window.fetchTokens = fetchTokens;

    // TESTING END

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
    // ReactDOM.render(image, root);
})