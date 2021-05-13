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
                this.props.history.push('/')})
            .then(() => {
                this.props.resetErrors
            })
    }

    update(field) {
        return (e) => this.setState({
            [field]: e.currentTarget.value
        });
    }
    
    // logInDemo(field) {
    //     let email = "iamgroot@marvel.com";
    //     let password = "password";
    //     return (e) => this.setState({
    //         [field]: e.currentTarget.value
    //     });
    // }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return(
            <div>
                <h3>Welcome to Robinhodl</h3>
                <br />
                <form onSubmit={this.handleSubmit}>
                    <label>Email
                        <input 
                            type="email"
                            value={this.state.email}
                            onChange={this.update('email')}/>
                    </label>
                    <br />
                    <label>Password
                        <input 
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')}/>
                    </label>
                    <br />
                    <p>Forgot your email or password?</p>
                            {this.renderErrors()}
                    <button type="submit">Log In</button>
                </form>
                <form onSubmit={this.logInDemo}>
                    <button type="submit">Demo</button>
                </form>
            </div>
        )
    }
}

export default LogInForm;