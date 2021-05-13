import React from 'react';

class LogInForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { email: "", password: "" }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        // console.log(props);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
        // this.props.history.push('/')
    }

    update(field) {
        return (e) => this.setState({
            [field]: e.currentTarget.value
        });
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
                    <button type="submit">Log In</button>
                </form>
            </div>
        )
    }
}

export default LogInForm;