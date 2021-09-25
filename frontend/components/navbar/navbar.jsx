import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Products from './products';

export default function navbar({pathname}) {

  const currentUser = useSelector((state) => state.session.currentUser)
  // const pathname = useSelector((state) => ownProps.location.pathname)
  const dispatch = useDispatch();

  const [showProducts, setShowProducts] = useState(false);
  const [showLearn, setShowLearn] = useState(false);
  const [showAboutMe, setShowAboutMe] = useState(false);

  const openProducts = () => {
    setShowProducts(!showProducts);
    setShowLearn(false);
    setShowSupport(false);
    setShowAboutMe(false);
  }

  const openLearn = () => {
    setShowLearn(!showLearn);
    setShowProducts(false);
    setShowSupport(false);
    setShowAboutMe(false);
  }

  const openAboutMe = () => {
    setShowAboutMe(!showAboutMe);
    setShowLearn(false);
    setShowProducts(false);
    setShowSupport(false);
  }

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
          <div id="upper-navbar">
            <div id="logo-container">
              <Link to="/">
                <h2>Robinhodl</h2>
                <img src={window.robinhood_favicon_black} />
                {/* <i class="fas fa-feather"></i> */}
              </Link>
            </div>

            <div id="navbar-links-container">
              <p onClick={openProducts}>Products <i className={showProducts ? "fas fa-chevron-up" : "fas fa-chevron-down"}></i></p>
              <p onClick={openLearn}>Learn <i className={showLearn ? "fas fa-chevron-up" : "fas fa-chevron-down"}></i></p>
              <p>Support</p>
              <p onClick={openAboutMe}>Who I am <i className={showAboutMe ? "fas fa-chevron-down" : "fas fa-chevron-up"}></i></p>
            </div>

            <div id="session-container">
                <Link to="/login">Log In</Link>
                <Link to="/signup"><button id="sign-up-btn-1">Sign Up</button></Link>
            </div>
          </div>
          <Products showProducts={showProducts}/>
        </div>
    )
  }
}