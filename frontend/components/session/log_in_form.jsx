import React from 'react';

class LogInForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { email: "", password: "" }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.logInDemo = this.logInDemo.bind(this);
        this.update = this.update.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.logIn(user)
            .then(() => {
                this.props.history.push('/')})
    }
    
    logInDemo(e) {
        e.preventDefault();
        const user = { email: "iamgroot@marvel.com", password: "password"};
        this.props.logIn(user)
            .then(() => {
                this.props.history.push('/portfolio')})
            .then(() => {
                this.props.resetErrors
            })
    }

    update(field) {
        return (e) => this.setState({
            [field]: e.currentTarget.value
        });
    }

    // renderErrors() {
    //     return (
    //         <ul>
    //             {this.props.errors.map((error, i) => (
    //                 <li key={`error-${i}`}>
    //                     {error}
    //                 </li>
    //             ))}
    //         </ul>
    //     );
    // }

    render() {
        return(
            <div className="log-in">
                <div className="image">
                    <img src="https://cdn.robinhood.com/assets/generated_assets/632fcb3e7ed928b2a960f3e003d10b44.jpg" />
                </div>
                <div className="form-container">
                    <div className="form">
                        <div className="header">
                            <h3>Welcome to Robinhodl</h3>
                        </div>
                        <br />
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                <p>Email</p>
                                <input
                                    type="email"
                                    required
                                    value={this.state.email}
                                    onChange={this.update('email')} />
                            </label>
                            <br />
                            <label>
                                <p>Password</p>
                                <input
                                    type="password"
                                    required
                                    value={this.state.password}
                                    onChange={this.update('password')} />
                            </label>
                            <br />
                            {/* <p>Forgot your email or password?</p> */}
                            {/* {this.renderErrors()} */}
                            <button>Log In</button>
                        </form>
                        <br />
                        <form onSubmit={this.logInDemo}>
                            <button>Demo</button>
                        </form>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default LogInForm;