import React from 'react';

class LogInForm extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div>
                <h3>Welcome to Robinhood</h3>
                <form>
                    <label>Email
                        <input type="email"/>
                    </label>
                    <label>Password
                        <input type="password"/>
                    </label>
                    <p>Forgot your email or password?</p>
                    <button type="submit">Sign in</button>
                </form>
            </div>
        )
    }
}

export default LogInForm.apply;