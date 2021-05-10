import React from "react";
import ReactDOM from "react-dom";
import { login, logout, signup } from "./util/session_api_util";



document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const test = <div>This is the DOM</div>;

    window.login = login;
    window.logout = logout;
    window.signup = signup;


    ReactDOM.render(test, root);
});