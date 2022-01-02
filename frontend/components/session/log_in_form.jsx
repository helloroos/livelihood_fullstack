import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

export default function LogInForm() {
  
  useEffect(() => {
    document.title = `Log In | Robinhodl`;
  });
  
  const dispatch = useDispatch();
  const history = useHistory();
  const currentUser = useSelector((state) => state.session.currentUserId)
  // const currentUser = useSelector((state) => state.session.currentUser)
  const errors = useSelector((state) => state.errors.session);
  const [user, setUser] = useState({email: "", password: ""});
  const [demo, setDemo] = useState({ email: "iamgroot@marvel.com", password: "password"});
  const [showDemo, setShowDemo] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn(user))
    .then(() => {
      history.push('/portfolio');
    })
  }
  
  const logInDemo = (e) => {
    e.preventDefault();
    const demo = {email: "iamgroot@marvel.com", password: "password"};
    setShowDemo(!showDemo)
    setTimeout(() => {
      dispatch(logIn(demo))
      .then(() => {
        history.push('/portfolio');
      })
    }, 1500);
  }

  return (
    <div id="log-in-container">

      <div id="image-container">
        <img src="https://cdn.robinhood.com/assets/generated_assets/632fcb3e7ed928b2a960f3e003d10b44.jpg" />
      </div>

      <div id="form-container">
        <div id="form-inner-container">
          <form onSubmit={handleSubmit}>
            <h3>Welcome to Robinhodl</h3>
            
            <label>
              <p>Email</p>
              <div className="inputs">
                <input type="email" className={showDemo ? "input-visibility" : "demo-placeholder"} onChange={(e) => setUser({...user, email: e.target.value})} value={showDemo ? demo.email : user.email } required/>
              </div>
            </label>

            <label>
              <p>Password</p>
              <div className="inputs">
                <input type="password" className={showDemo ? "input-visibility" : "demo-placeholder"} onChange={(e) => setUser({ ...user, password: e.target.value })} value={showDemo ? demo.password : user.password } required/>
              </div>
            </label>

            <p id="sign-up"><Link to="/signup">New to Robinhodl? Sign up instead.</Link></p>
            {/* {this.renderErrors()} */}

          <div id="session-btns">
            <button type="submit">Sign In</button>
            <button type="submit" onClick={logInDemo}>Demo</button>
          </div>
          </form>

        </div>
      </div>
    </div>
  )
}
