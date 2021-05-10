import React from "react";
import ReactDOM from "react-dom";
// import configureStore from "./store/store";

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const test = <div>This is the DOM</div>;
    // const store = configureStore();

    // window.store = store;

    // ReactDOM.render(<Root store={store} />, root);
    ReactDOM.render(test, root);
})