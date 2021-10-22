import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import Products from './products';
import Learn from './learn';
import AboutMe from './about_me';
import SearchResult from './search_result';

export default function Navbar() {

  const currentUser = useSelector((state) => state.session.currentUserId)
  const dispatch = useDispatch();
  const location = useLocation()
  const tokens = useSelector((state) => state.entities.tokenInfo.tokens)

  const [showProducts, setShowProducts] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [showLearn, setShowLearn] = useState(false);
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [showCloseArea, setShowCloseArea] = useState(false);
  const [hoverLogo, setHoverLogo] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [result, setResult] = useState(null);

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

  const changeLogo = () => {
    setHoverLogo(!hoverLogo)
  }

  useEffect(() => {
    dispatch(fetchTokens())
  }, [currentUser]);

  const fetchTokenSearchResult = (searchString) => {

    let matches = [];
    
    matches = tokens.filter(token => {
      const regex = new RegExp(`^${searchString}`, 'gi')
      return token.name.match(regex);
    });

    if (searchString.length === 0) {
      matches = []
      setSearchInput("");
    }

    generateHTML(matches)
  }
  
  const generateHTML = (matches) => {
    if (matches && matches.length > 0) {
      setResult(matches.map((match) => {
        return (
        <div className="match" key={match.symbol}>
          <Link to={`/tokens/${match.id}`} onClick={handleClick}>
            <h4 id="token-symbol">${match.symbol.toUpperCase()}</h4>
            <h4 id="token-name">${match.name}</h4>
          </Link>
        </div>
      )}));
    } else {
      setShowResults(false)
    }
  }

  const handleChange = (e) => {
    e.preventDefault();
    setShowResults(true)
    fetchTokenSearchResult(e.target.value)
    setSearchInput(e.target.value)
  }

  const handleClick = () => {
    setShowResults(false)
    setSearchInput("")
  }

  if (location.pathname == "/login" || location.pathname == "/signup") {
    return null;
  } else if (currentUser) {
    return (
      <div id="logged-in-navbar-container">
        <div id="logo-container">
          <Link to="/portfolio" onMouseEnter={changeLogo} onMouseLeave={changeLogo}>
            {hoverLogo ? <img src="https://firebasestorage.googleapis.com/v0/b/scroople-25727.appspot.com/o/robinhood_favicon_org.png?alt=media&token=5321590b-498d-4ee9-a386-9a9ae3ae96ea" alt="orange-logo" /> : <img src="https://firebasestorage.googleapis.com/v0/b/scroople-25727.appspot.com/o/robinhood_favicon_black.png?alt=media&token=45547e1d-6aea-40ce-8e18-aae8d72970f0" alt="black-logo" />}
          </Link>
        </div>

        <div id="search-container">
          <div id="search-input">
            <i className="fas fa-search"></i>
            <input type="search" placeholder="Search" onChange={(e) => handleChange(e)} value={searchInput}/>
          </div>
          {showResults ? <SearchResult tokenSearchResult={result} /> : <div id="no-search"></div>}
        </div>

        <div id="navbar-links-container">
          <a id="i" href="https://www.linkedin.com/in/roosmichelle/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
          <a id="i" href="https://github.com/michelleroos" target="_blank"><i className="fab fa-github"></i></a>
          <a id="i-r" href="https://firebasestorage.googleapis.com/v0/b/scroople-25727.appspot.com/o/Michelle%20Roos%20-%20Resume.pdf?alt=media&token=694e1ef5-62c6-4973-a3fa-56848d3a85d9" target="_blank"><i className="far fa-file"></i></a>
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