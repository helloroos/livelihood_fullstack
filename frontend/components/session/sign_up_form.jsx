import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

// export default function sign_up_form({ signUp, resetErrors, errors }) {
export default function sign_up_form() {

  useEffect(() => {
    document.title = `Sign up | Robinhodl`;
  });

  const resetErrors = useSelector((state) => state.session.currentUserId)
  // const resetErrors = useSelector((state) => state.session.currentUser)
  const errors = useSelector((state) => state.errors.session);
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState({ first_name: "", last_name: "", email: "", password: "" })

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(user))
    .then(() => {
      history.push('/portfolio');
    })
  }

  return (
    <div id="sign-up-container">
      <div id="sign-up-form-container">
        <div id="sign-up-form-inner-container">
          
          <header>
            <div id="logo-container">
              <Link to="/portfolio">
                <h2>Robinhodl</h2>
                <img src={window.robinhood_favicon_black} />
              </Link>
            </div>
            <h3 id="second-h3">Make Your Fake Money Move</h3>
            <p id="first-p">Robinhodl lets you invest in the crypto currency you love.</p>
          </header>

          <form onSubmit={handleSubmit}>
            <p>Please enter your full name.</p>
            <label>
              <input type="text" className="short" placeholder="First name" onChange={(e) => setUser({ ...user, first_name: e.target.value })} value={user.first_name} required />
            </label>
            <label>
              <input type="text" className="short" id="second-input" placeholder="Last name" onChange={(e) => setUser({ ...user, last_name: e.target.value })} value={user.last_name} required />
            </label>
            <label>
              <input type="email" placeholder="Email" onChange={(e) => setUser({ ...user, email: e.target.value })} value={user.email} required />
            </label>
            <label>
              <input type="password" placeholder="Password (min. 6 characters)" onChange={(e) => setUser({ ...user, password: e.target.value })} value={user.password} required />
            </label>

            <div className="session-btns" id="sign-up-btn-container">
              <button type="submit">Sign up</button>
              <p id="log-in"><Link to="/login">Already a member? Log in instead.</Link></p>
              {/* {this.renderErrors()} */}
            </div>
          </form>

          <div id="fine-print">
            <p>Robinhodl investments do not involve risk, including the possible loss of principal. Users do not need to consider their investment objectives and risks carefully before investing (because it's not ACTUALLY a trading platform).</p>
            <p>Trading on this platform is not real and does not have any commission. Real time data is pulled in from Coin Gecko to enhance the experience of fake trades. Please see Robinhodl’s fee schedule to learn more.</p>
            <p>Crypto currencies offered through Robinhodl, Inc.</p>
            <div id="contact-info">
              <a href="https://github.com/michelleroos" id="github" target="_blank" className="contact-links">GitHub</a>
              <a href="https://www.linkedin.com/in/roosmichelle/" id="linkedin" target="_blank" className="contact-links">LinkedIn</a>
              {/* <a href="#" id="portfolio" className="contact-links" target="_blank">Portfolio</a> */}
              <a href="https://firebasestorage.googleapis.com/v0/b/scroople-25727.appspot.com/o/Michelle%20Roos%20-%20Resume.pdf?alt=media&token=694e1ef5-62c6-4973-a3fa-56848d3a85d9"
                id="resume" className="contact-links" target="_blank" download><i className="far fa-file"></i></a>
            </div>
            <p>© 2021 Michelle Roos. All rights reserved.</p>
          </div>
        </div>
      </div>

      <div id="info-container">
        <div id="info-content">
          <h3>Free trading with fake money</h3>
          <p>Break free from commission-fees and make
            unlimited commission-free trades in fake currencies through Robinhodl.
            No fees may apply. View our fee schedule to
            learn more.</p>
          <h3>Account Protection</h3>
          <p>Since this is not a real platform, there is no financial risk.</p>
          <h3>Stay on top of your portfolio</h3>
          <p>Set up customized news to stay
            on top of your assets as casually or as
            relentlessly as you like. Controlling the
            flow of info is up to you.</p>
        </div>
      </div>
    </div>
  )
}