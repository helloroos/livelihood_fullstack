import React from 'react';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            email: "", 
            password: "",
            first_name: "",
            last_name: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.signUp(user)
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
        return (
            <div className="sign-up-container">
                <section className="form-container">
                    <div className="form">
                        <header>
                            <h3>Robinhodl</h3>
                            <h3>Make Your Money Move</h3>
                            <p>Robinhood lets you invest in companies you love, 
                                commission-free.</p>
                        </header>
                        <br />
                        <form onSubmit={this.handleSubmit}>
                            <p>Please enter your full legal name. Your legal 
                                name should match any form of government ID.</p>
                            <label>
                                <input
                                    type="text"
                                    id="short"
                                    placeholder="First name"
                                    value={this.state.first_name}
                                    onChange={this.update('first_name')}
                                    required />
                            </label>
                            <label>
                                <input
                                    type="text"
                                    id="short"
                                    placeholder="Last name"
                                    value={this.state.last_name}
                                    onChange={this.update('last_name')}
                                    required />
                            </label>
                            <label>
                                <input
                                    type="email"
                                    id="long"
                                    placeholder="Email"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    required />
                            </label>
                            <br />
                            <label>
                                <input
                                    type="password"
                                    id="long"
                                    placeholder="Password (min. 6 characters)"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    required />
                            </label>
                            <br />
                            <p>Already a user? Log in instead.</p>
                                    {/* {this.renderErrors()} */}
                            <button type="submit">{this.props.formType}</button>
                        </form>
                    </div>
                </section>
                <div className="info-container">
                    <section>
                        <div className="info">
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
                    </section>
                </div>
            </div>
        )
    }
}

export default SignUpForm;