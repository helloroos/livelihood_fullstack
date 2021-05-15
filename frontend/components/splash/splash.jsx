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
        </div>
        )
    } else {
      return(
        <div>
          <div className="sign-up-offer">

            <div className="offer">
              <h1>Investing for Everyone</h1>
              <p>Commission-free investing, plus the tools you need to put your
              money in motion. Sign up and get your first tokens for free.
              Certain limitations apply.</p>
              
              <div className="sign-up-btn">
                <Link to="/signup">
                  <button type="submit">Sign Up</button>
                </Link>
              </div>

              <div>
                <p>ⓘ Commissions and Free Token Disclosure</p>
              </div>
            </div>

            <div className="offer-image">
              <img className="offer-image" src={window.offer_image} />
              {/* <video src={window.offer_video} draggable="false" className="offer-video" autoPlay controlsList="nodownload nofullscreen noremoteplayback" loop muted playsInline preload="auto" /> */}
            </div>
              
          </div>

          <div className="disclaimer">
            <p>See our fee schedule to learn more about cost.</p>
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
}

export default Splash;