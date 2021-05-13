import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  constructor(props) {
      super(props)
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut() {
    this.props.logOut;
    this.props.resetErrors;
  }

  render() {
    if (this.props.currentUser) {
      return(
        <div>
          <Link to="/cash">Cash</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/account">Account</Link>
          <button onClick={this.props.logOut}>Log Out</button>
        </div>
        )
    } else {
      return(
        <div>
          <div className="navbar-container">
            <div className="logo">
              <Link to="/">
                <h2>Robinhodl </h2>
                <img src={window.robinhood_favicon_black} />
              </Link>
            </div>

            <nav className="navbar">
              <ul className="navbar-list">
                <li><Link to="products">Products</Link></li>
                <li><Link to="learn">Learn</Link></li>
                <li><Link to="support">Support</Link></li>
                <li><Link to="whoweare">Who we are</Link></li>
              </ul>
            </nav>

            <div className="session-links">
              <span className="log-in-btn"><Link to="/login">Log In</Link></span>
              <Link to="/signup"><button type="submit" className="sign-up-btn">Sign Up</button></Link>
            </div>
          </div>

          <div className="sign-up-offer">
            <div className="header">
              <h1>Investing For Everyone</h1>
            </div>
            <div className="paragraph">
              <p>Commission-free investing, plus the tools you need to put your
              money in motion. Sign up and get your first coin for free.
              Certain limitations apply.</p>
            </div>
            <div>
              <Link to="/signup"><button type="submit" className="sign-up-btn">Sign Up</button></Link>
            </div>
            <div>
              <p> ⓘ Commissions and Free Coin Disclosure</p>
            </div>
            <div className="sign-up-offer-img">
              <p>IMAGE</p>
            </div>
            <div>
              <p>See our fee schedule to learn more about cost.</p>
            </div>
          </div>

          <div className="superbowl-campaign">
            <span>VIDEO</span>
            <h1>We are all investors</h1>
            <p>See the campaign ➔</p>
          </div>
        </div>
      )
    }
  }
}

export default Splash;