import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import "core-js/stable";
import "regenerator-runtime/runtime";

// TESTING -- TO BE REMOVED
import { logIn, logOut, resetErrors, signUp } from "./actions/session_actions";
import { fetchTransfers, makeTransfer } from "./actions/transfer_action";
import { fetchOrders, makeOrder } from "./actions/order_actions";
import { fetchToken, fetchTokenHistorical, fetchTokens } from "./actions/token_actions";
// import { fetchUser } from "./util/user_api_util";
import { fetchNews } from "./actions/news_actions";
import { getUser } from "./actions/user_actions";
// import { logIn, logOut, signUp } from "./util/session_api_util";

document.addEventListener('DOMContentLoaded', () => {
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
    window.fetchTokens = fetchTokens;
    window.fetchToken = fetchToken;
    window.fetchTokenHistorical = fetchTokenHistorical;
    window.makeTransfer = makeTransfer;
    window.fetchTransfers = fetchTransfers;
    window.makeTransfer = makeTransfer;
    window.makeOrder = makeOrder;
    window.fetchOrders = fetchOrders;
    window.getUser = getUser;
    window.fetchNews = fetchNews;

    // TESTING END

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
    // ReactDOM.render(image, root);
})