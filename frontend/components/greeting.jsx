import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (currentUser) {
            return(
                <div>
                    <Link to="/login">Log In</Link>
                    <Link to="/signup">Sign Up</Link>
                </div>
            )
        } else {
            return(
            <div>
                <Link to="/login">Cash</Link>
                <Link to="/signup">Messages</Link>
                <Link to="/signup">Account</Link>
                <button onClick={this.props.logOut}>Log Out</button>
            </div>
        )   
        }
    }
}

export default Greeting;