import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import Products from './products';
import Learn from './learn';
import AboutMe from './about_me';

export default function Navbar() {

  const currentUser = useSelector((state) => state.session.currentUserId)
  // const currentUser = useSelector((state) => state.session.currentUser)
  // const pathname = useSelector((state) => ownProps.location.pathname)
  const dispatch = useDispatch();
  const location = useLocation()

  const [showProducts, setShowProducts] = useState(false);
  const [showLearn, setShowLearn] = useState(false);
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [showCloseArea, setShowCloseArea] = useState(false);

  const openProducts = () => {
    setShowProducts(!showProducts);
    setShowCloseArea(true);
    setShowLearn(false);
    setShowAboutMe(false);
  }

  const openLearn = () => {
    setShowLearn(!showLearn);
    setShowCloseArea(true);
    setShowProducts(false);
    setShowAboutMe(false);
  }

  const openAboutMe = () => {
    setShowAboutMe(!showAboutMe);
    setShowCloseArea(true);
    setShowLearn(false);
    setShowProducts(false);
  }

  const closeLowerNav = () => {
    setShowProducts(false)
    setShowLearn(false)
    setShowAboutMe(false)
    setShowCloseArea(false)
  }

  if (location.pathname == "/login" || location.pathname == "/signup") {
    return null;
  } else if (currentUser) {
    return (
      <div id="logged-in-navbar-container">
        <div id="logo-container">
          <Link to="/portfolio">
            <img src="https://pbs.twimg.com/profile_images/1267616128022351873/dZJpsWTD_400x400.jpg" />
            {/* <i class="fas fa-hand-holding-usd"></i> */}
          </Link>
        </div>

        <div id="search-container">
          <i className="fas fa-search"></i>
          <input type="search" placeholder="Search" />
        </div>

        <div id="navbar-links-container">
          <p onClick={openAboutMe} id="about-me">About me</p>
          <AboutMe showAboutMe={showAboutMe} location={location} />
          <p id="divider">|</p>
          <Link to="/cash">Cash</Link>
          <Link to="/portfolio">Portfolio</Link>
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
            {/* <p><Link to="/contact">Contact</Link></p> */}
            <p onClick={openAboutMe}>Who I am <i className={showAboutMe ? "fas fa-chevron-up" : "fas fa-chevron-down"}></i></p>
          </div>

          <div id="session-container">
              <Link to="/login">Log In</Link>
              <Link to="/signup"><button id="sign-up-btn-1">Sign Up</button></Link>
          </div>
        </div>
        <Products showProducts={showProducts}/>
        <Learn showLearn={showLearn}/>
        <AboutMe showAboutMe={showAboutMe} location={location}/>
        <div onClick={closeLowerNav} id={showCloseArea ? "close-lower-navbar" : ""}>
        </div>
      </div>
    )
  }
}