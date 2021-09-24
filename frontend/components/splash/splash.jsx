import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function splash() {

  useEffect(() => {
    document.title = `Commisson-free Cryptocurrency Exchange | Robinhodl`;
  });

  const currentUser = useSelector((state) => state.session.currentUser)

  if (currentUser) {
    return (
      <div>
      </div>
    )
  } else {
    return (
      <div id="splash-container">
        <div id="splash1-container">

          <div id="splash1-text">
            <h1>Investing for Everyone</h1>
            <p>Commission-free investing, plus the tools you need to put your
              money in motion. Sign up and get your first tokens for free.
              Certain limitations apply.</p>

            <Link to="/signup">
              <button type="submit">Sign Up</button>
            </Link>

            <div id="disclosure-container">
              <a href="#">ⓘ Commissions and Free Token Disclosure</a>
            </div>
          </div>

          <div id="splash1-image">
            <video src={window.offer_video} draggable="false" className="offer-video" autoPlay controlsList="nodownload nofullscreen noremoteplayback" loop muted playsInline preload="auto" />
            <img className="offer-image" src={window.offer_image} />
          </div>

        </div>

        <div id="splash2-container">
          <p>See our fee schedule to learn more about cost.</p>
        </div>

        <div id="splash3-container">
          <div id="splash3-img-container">

            <img src="https://robinhood.com/us/en/_next/static/images/balloon__ef7d8a9bb1c7845fcb7a6799c35d513e.svg" alt="balloon" />
          </div>

          <div id="splash3-text-container">
            <div id="splash3-header">
              <h2>Introducing IPO access</h2>
              <p>Get in at the IPO price. Now, you can become one of the first public investors in upcoming IPOs.</p>
            </div>

            <div id="splash3-bullets">

              <img src="https://robinhood.com/us/en/_next/static/images/comeall__c29b103566f44e51d624989e65ecf3be.svg" id="turn-img" alt="bullet-image" />
              <div className="bullet-text" id="turn-text">
                <h3>It's your turn</h3>
                <p>No minimum account balances or special status requirements.</p>
              </div>

              <img src="https://robinhood.com/us/en/_next/static/images/one-first__d86b9ee63a8475364159f2d21ea5f01f.svg" id="first-img" alt="bullet-image" />
              <div className="bullet-text" id="first-text">
                <h3>Be one of the first</h3>
                <p>Request shares in new companies before their stock starts trading on public exchanges.</p>
              </div>

              <img src="https://robinhood.com/us/en/_next/static/images/fair-shot__fb09db580d0ada2e8626a6e46094bb27.svg" id="shot-img" alt="bullet-image"/>
              <div className="bullet-text" id="shot-text">
                <h3>Get a fair shot</h3>
                <p>While IPO shares are limited, IPO Access gives you the same opportunity to invest, regardless of order size or account value.</p>
              </div>
            </div>

            <div id="splash3-disclosure">
              <a href="#">ⓘ IPO Access Disclosure</a>
            </div>
            <div id="splash3-header">

            </div>
          </div>
        </div>

        <div id="splash4-container">
          <div id="splash4-text-container">
            <div id="splash4-header">
              <h2>Introducing Fractional Shares</h2>
              <p>Invest in thousands of stocks with as little as $1.</p>
            </div>

            <div id="splash4-sections-container">
              <div id="splash4-sec1" className="splash4-sections">
                <h3>Invest Any Amount</h3>
                <p>Choose how much you want to invest, and we’ll convert from dollars to parts of a whole share.</p>
              </div>
              <div id="splash4-sec2" className="splash4-sections">
                <h3>Build a Balanced Portfolio</h3>
                <p>Customize your portfolio with pieces of different companies and funds to help reduce risk.</p>
              </div>
              <div id="splash4-sec3" className="splash4-sections">
                <h3>Trade in Real Time</h3>
                <p>Trades placed during market hours are executed at that time, so you’ll always know the share price.</p>
              </div>
            </div>

            <div id="splash4-disclosure">
              <a href="#">ⓘ Fractional Shares Disclosure</a>
            </div>
          </div>

          <div id="splash4-img-container">
            <img src={window.frac_shares} alt="fractional_shares" />
          </div>

        </div>

        <div id="splash5-container">

        </div>


        {/* <div className="superbowl-campaign">
            <video src="https://cdn.robinhood.com/assets/superbowl/superbowl.mp4"></video>
            <h1>We are all investors</h1>
            <p>See the campaign ➔</p>
          </div>

          <div>
            FOOTER
          </div> */}
      </div>
    )
  }
}

// class Splash extends React.Component {
//   constructor(props) {
//       super(props)
//     this.handleLogOut = this.handleLogOut.bind(this);
//   }

//   handleLogOut() {
//     this.props.logOut;
//     this.props.resetErrors;
//   }

//   render() {
//     if (this.props.currentUser) {
//       return(
//         <div>            
//         </div>
//         )
//     } else {
//       return(
//         <div>
//           <div className="sign-up-offer">

//             <div className="offer">
//               <h1>Investing for Everyone</h1>
//               <p>Commission-free investing, plus the tools you need to put your
//               money in motion. Sign up and get your first tokens for free.
//               Certain limitations apply.</p>
              
//               <div className="sign-up-btn">
//                 <Link to="/signup">
//                   <button type="submit">Sign Up</button>
//                 </Link>
//               </div>

//               <div className="disclosure">
//                 <p>ⓘ Commissions and Free Token Disclosure</p>
//               </div>
//             </div>

//             <div className="offer-image">
//               <img className="offer-image" src={window.offer_image} />
//               {/* <video src={window.offer_video} draggable="false" className="offer-video" autoPlay controlsList="nodownload nofullscreen noremoteplayback" loop muted playsInline preload="auto" /> */}
//             </div>
              
//           </div>

//           <div className="disclaimer">
//             <p>See our fee schedule to learn more about cost.</p>
//           </div>

//           {/* <div className="superbowl-campaign">
//             <video src="https://cdn.robinhood.com/assets/superbowl/superbowl.mp4"></video>
//             <h1>We are all investors</h1>
//             <p>See the campaign ➔</p>
//           </div>

//           <div>
//             FOOTER
//           </div> */}
//         </div>
//       )
//     }
//   }
// }

// export default Splash;