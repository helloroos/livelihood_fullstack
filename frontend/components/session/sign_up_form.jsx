import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

// export default function sign_up_form({ signUp, resetErrors, errors }) {
export default function sign_up_form() {

  useEffect(() => {
    document.title = `Sign up | Robinhodl`;
  });

  const resetErrors = useSelector((state) => state.session.currentUser)
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
            <h3 id="second-h3">Make Your Money Move</h3>
            <p id="first-p">Robinhood lets you invest in companies you love,
              commission-free.</p>
          </header>

          <form onSubmit={handleSubmit}>
            <p>Please enter your full legal name. Your legal
              name should match any form of government ID.</p>
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
            <p>Robinhodl investments do not involve risk, including the possible loss of principal. Investors do not need to consider their investment objectives and risks carefully before investing.</p>
            <p>Commission-free trading means $0 commission trading on self-directed individual cash or margin brokerage accounts that trade U.S. listed crytp currencies via mobile devices or web. Keep in mind, other fees such as trading (non-commission) fees, Gold subscription fees, wire transfer fees, and paper statement fees do not apply to your brokerage account. Please see Robinhodl’s fee schedule to learn more.</p>
            <p>Crypto currencies offered through Robinhodl, Inc.</p>
            <div id="contact-info">
              <a href="https://github.com/michelleroos" id="github" target="_blank" className="contact-links">GitHub</a>
              <a href="https://www.linkedin.com/in/roosmichelle/" id="linkedin" target="_blank" className="contact-links">LinkedIn</a>
              {/* <a href="#" id="portfolio" className="contact-links" target="_blank">Portfolio</a> */}
              <a href="https://firebasestorage.googleapis.com/v0/b/scroople-25727.appspot.com/o/Michelle%20Roos%20-%20Resume.pdf?alt=media&token=04dc0414-21f1-4d24-af4e-5a49eceb3371"
                id="resume" className="contact-links" target="_blank" download><i className="far fa-file"></i></a>
            </div>
            <p>© 2021 Michelle Roos. All rights reserved.</p>
          </div>
        </div>
      </div>

      <div id="info-container">
        <div id="info-content">
          <h3>Commission-free trading</h3>
          <p>Break free from commission-fees and make
            unlimited commission-free trades in stocks,
            funds, and options with Robinhood Financial.
            Other fees may apply. View our fee schedule to
            learn more.</p>
          <h3>Account Protection</h3>
          <p>Robinhood Financial is a member of SIPC.
            Securities in your account protected up to
            $500,000. For details, please see
            www.sipc.org.</p>
          <h3>Stay on top of your portfolio</h3>
          <p>Set up customized news and notifications to stay
            on top of your assets as casually or as
            relentlessly as you like. Controlling the
            flow of info is up to you.</p>
        </div>
      </div>
    </div>
  )
}

// class SignUpForm extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       email: "",
//       password: "",
//       first_name: "",
//       last_name: ""
//     }
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.update = this.update.bind(this);
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     const user = Object.assign({}, this.state);
//     this.props.signUp(user)
//       .then(() => {
//         this.props.history.push('/portfolio')
//       })
//       .then(() => {
//         this.props.resetErrors
//       })
//   }

//   update(field) {
//     return (e) => this.setState({
//       [field]: e.currentTarget.value
//     });
//   }

//   // renderErrors() {
//   //     return (
//   //         <ul>
//   //             {this.props.errors.map((error, i) => (
//   //                 <li key={`error-${i}`}>
//   //                     {error}
//   //                 </li>
//   //             ))}
//   //         </ul>
//   //     );
//   // }

//   render() {
//     return (
//       <div className="sign-up-container">
//         <section className="form-container">
//           <div className="form">
//             <header>
//               <h3>Robinhodl</h3>
//               <h3>Make Your Money Move</h3>
//               <p>Robinhood lets you invest in companies you love,
//                 commission-free.</p>
//             </header>
//             <br />
//             <form onSubmit={this.handleSubmit}>
//               <p>Please enter your full legal name. Your legal
//                 name should match any form of government ID.</p>
//               <label>
//                 <input
//                   type="text"
//                   id="short"
//                   placeholder="First name"
//                   value={this.state.first_name}
//                   onChange={this.update('first_name')}
//                   required />
//               </label>
//               <label>
//                 <input
//                   type="text"
//                   id="short"
//                   placeholder="Last name"
//                   value={this.state.last_name}
//                   onChange={this.update('last_name')}
//                   required />
//               </label>
//               <label>
//                 <input
//                   type="email"
//                   id="long"
//                   placeholder="Email"
//                   value={this.state.email}
//                   onChange={this.update('email')}
//                   required />
//               </label>
//               <br />
//               <label>
//                 <input
//                   type="password"
//                   id="long"
//                   placeholder="Password (min. 6 characters)"
//                   value={this.state.password}
//                   onChange={this.update('password')}
//                   required />
//               </label>
//               <br />
//               <p>Already a user? Log in instead.</p>
//               {/* {this.renderErrors()} */}
//               <button type="submit">{this.props.formType}</button>
//             </form>
//           </div>
//         </section>
//         <div className="info-container">
//           <section>
//             <div className="info">
//               <h3>Commission-free trading</h3>
//               <p>Break free from commission-fees and make
//                 unlimited commission-free trades in stocks,
//                 funds, and options with Robinhood Financial.
//                 Other fees may apply. View our fee schedule to
//                 learn more.</p>
//               <h3>Account Protection</h3>
//               <p>Robinhood Financial is a member of SIPC.
//                 Securities in your account protected up to
//                 $500,000. For details, please see
//                 www.sipc.org.</p>
//               <h3>Stay on top of your portfolio</h3>
//               <p>Set up customized news and notifications to stay
//                 on top of your assets as casually or as
//                 relentlessly as you like. Controlling the
//                 flow of info is up to you.</p>
//             </div>
//           </section>
//         </div>
//       </div>
//     )
//   }
// }

// export default SignUpForm;