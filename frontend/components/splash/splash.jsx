import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
    constructor() {
        super()
    }
    render() {
        return(
            <div className="outer-navbar">
                <div className="logo">
                    <span><p>Robinhodl</p></span>
                    <span><img src={window.robinhood_favicon_black} /></span>
                </div>
                <div className="inner-navbar">
                    <ul className="navbar-list">
                        <li>Products</li>
                        <li>Learn</li>
                        <li>Support</li>
                        <li>Who we are</li>
                    </ul>
                </div>
                <div className="session-links">
                    <span><Link to="/login">Log In</Link></span>
                    <Link to="/signup"><button type="submit">Sign Up</button></Link>
                </div>
            </div>
        )
    }
}

export default Splash;