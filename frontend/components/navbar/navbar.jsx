import React from 'react';
import { Link } from 'react-router-dom';

export default function navbar({ pathname, logOut, currentUser }) {
  if (pathname == "/login" || pathname == "/signup") {
    return null;
  } else if (currentUser) {
    return (
      <div className="inner-navbar">
        <div className="logo">
          <Link to="/portfolio">
            {/* <h2>Robinhodl</h2> */}
            <img src={window.robinhood_favicon_black} />
          </Link>
        </div>

        <span>
          {/* <img src={window.search} /> */}
          <input type="search" placeholder="Search" />
        </span>

        <nav>
          <ul className="navbar">
            <li><Link to="/cash">Cash</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/account">Account</Link></li>
            <li><Link to="/" onClick={logOut}>Log out</Link></li>
            {/* <button onClick={this.handleLogOut}>Log Out</button> */}
          </ul>
        </nav>
      </div>
    )
  } else {
    return (
      <div>
        <div className="outer-navbar">
          <div className="logo">
            <Link to="/">
              <h2>Robinhodl </h2>
              {/* <img src={window.robinhood_favicon_black} /> */}
            </Link>
          </div>

          <nav>
            <ul className="navbar">
              <li><Link to="products">GitHub</Link></li>
              <li><Link to="learn">LinkedIn</Link></li>
              <li><Link to="support">Portfolio</Link></li>
            </ul>
          </nav>

          <div className="session-div">
            <ul className="session-links">
              <li><Link to="/login">Log In</Link></li>
              <li>
                <Link to="/signup">
                  <button type="submit"
                    className="sign-up-btn-1">Sign Up</button>
                </Link></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}


// class NavBar extends React.Component {
//   constructor(props) {
//     super(props)
//     this.handleLogOut = this.handleLogOut.bind(this);
//   }

//   handleLogOut() {
//     this.props.logOut()
//       .then(() => {
//         this.props.history.push('/')
//       })
//       .then(() => {
//         this.props.resetErrors
//       })
//   }

//   render() {
//     const path = this.props.location.pathname;
//     if (path == "/login" || path == "/signup") {
//       return null;
//     } else if (this.props.currentUser) {
//       return (
//         <div className="inner-navbar">
//           <div className="logo">
//             <Link to="/portfolio">
//               {/* <h2>Robinhodl</h2> */}
//               <img src={window.robinhood_favicon_black} />
//             </Link>
//           </div>

//           <span>
//             {/* <img src={window.search} /> */}
//             <input type="search" placeholder="Search" />
//           </span>

//           <nav>
//             <ul className="navbar">
//               <li><Link to="/cash">Cash</Link></li>
//               <li><Link to="/portfolio">Portfolio</Link></li>
//               <li><Link to="/account">Account</Link></li>
//               <li><Link to="/account" onClick={this.handleLogOut}>Log out</Link></li>
//               {/* <button onClick={this.handleLogOut}>Log Out</button> */}
//             </ul>
//           </nav>
//         </div>
//       )
//     } else {
//       return (
//         <div>
//           <div className="outer-navbar">
//             <div className="logo">
//               <Link to="/">
//                 <h2>Robinhodl </h2>
//                 {/* <img src={window.robinhood_favicon_black} /> */}
//               </Link>
//             </div>

//             <nav>
//               <ul className="navbar">
//                 <li><Link to="products">GitHub</Link></li>
//                 <li><Link to="learn">LinkedIn</Link></li>
//                 <li><Link to="support">Portfolio</Link></li>
//               </ul>
//             </nav>

//             <div className="session-div">
//               <ul className="session-links">
//                 <li><Link to="/login">Log In</Link></li>
//                 <li>
//                   <Link to="/signup">
//                     <button type="submit"
//                       className="sign-up-btn-1">Sign Up</button>
//                   </Link></li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       )
//     }
//   }
// }

// export default NavBar;