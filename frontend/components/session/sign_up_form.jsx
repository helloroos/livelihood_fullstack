import React from 'react';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            email: "", 
            password: "",
            first_name: "",
            last_name: "",
            deposit: 0
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.signUp(user)
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
        return (
            <div className="sign-up-container">
                <section className="form-container">
                    <div className="form">
                        <h3>Robinhodl</h3>
                        <h3>Make Your Money Move</h3>
                        <p>Robinhood lets you invest in companies you love, 
                            commission-free.</p>
                        <br />
                        <form onSubmit={this.handleSubmit}>
                            <p>Please enter your full legal name. Your legal 
                                name should match any form of government ID.</p>
                            <label>
                                <input
                                    type="text"
                                    placeholder="First name"
                                    value={this.state.first_name}
                                    onChange={this.update('first_name')}
                                    required />
                            </label>
                            <label>
                                <input
                                    type="text"
                                    placeholder="Last name"
                                    value={this.state.last_name}
                                    onChange={this.update('last_name')}
                                    required />
                            </label>
                            <label>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    required />
                            </label>
                            <br />
                            <label>
                                <input
                                    type="password"
                                    placeholder="Password (min. 6 characters)"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    required />
                            </label>
                            <label>
                                <input
                                    type="text"
                                    placeholder="Initial deposit in USD"
                                    value={this.state.deposit}
                                    onChange={this.update('deposit')}
                                    required />
                            </label>
                            <br />
                            <p>Already an user? Log in instead.</p>
                                    {this.renderErrors()}
                            <button type="submit">{this.props.formType}</button>
                        </form>
                    </div>
                </section>
                <div className="info">
                    <section>
                        <div>
                            <h3>Header</h3>
                            <p>Paragraph</p>
                            <h3>Header</h3>
                            <p>Paragraph</p>
                            <h3>Header</h3>
                            <p>Paragraph</p>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default SignUpForm;