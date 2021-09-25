import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export default function navbar({pathname}) {

  const currentUser = useSelector((state) => state.session.currentUser)
  // const pathname = useSelector((state) => ownProps.location.pathname)
  const dispatch = useDispatch();

  if (pathname == "/login" || pathname == "/signup") {
    return null;
  } else if (currentUser) {
    return (
      <div id="logged-in-navbar-container">
        <div id="logo-container">
          <Link to="/portfolio">
            <img src={window.robinhood_favicon_black} />
            {/* <i class="fas fa-hand-holding-usd"></i> */}
          </Link>
        </div>

        <div id="search-container">
          <i className="fas fa-search"></i>
          <input type="search" placeholder="Search" />
        </div>

        <div id="navbar-links-container">
            <Link to="/cash">Cash</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/account">Account</Link>
            <Link to="/" onClick={() => dispatch(logOut())}>Log out</Link>
          </div>
      </div>
    )
  } else {
    return (
        <div id="logged-out-navbar-container">
          <div id="logo-container">
            <Link to="/">
              <h2>Robinhodl</h2>
              <img src={window.robinhood_favicon_black} />
              {/* <i class="fas fa-feather"></i> */}
            </Link>
          </div>

        <div id="navbar-links-container">
          <p>Products <i className="fas fa-chevron-down"></i></p>
          <p>Learn <i className="fas fa-chevron-down"></i></p>
          <p>Support</p>
          <p>Who I am <i className="fas fa-chevron-down"></i></p>
            {/* <a href="https://github.com/michelleroos" target="_blank">GitHub</a>
            <a href="https://www.linkedin.com/in/roosmichelle/" target="_blank">LinkedIn</a>
            <a href="#" target="_black">Portfolio</a> */}
          </div>

          <div id="session-container">
              <Link to="/login">Log In</Link>
              <Link to="/signup"><button id="sign-up-btn-1">Sign Up</button></Link>
          </div>
        </div>
    )
  }
}