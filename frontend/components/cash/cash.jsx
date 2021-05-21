import React from 'react';

class Cash extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            transfer_type: "Deposit",
            amount: 0,
            user_id: 0
        }
        this.currentUser = this.props.currentUser;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        // if (typeof (this.props.buyingPower) == "undefined") {
        if (Object.keys(this.props.transfers).length == 0) {
            this.props.fetchUser(this.currentUser);
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        const transferDetails = Object.assign({}, this.state);
        this.props.makeTransfer(transferDetails);
        this.setState({
            transfer_type: "Deposit",
            amount: 0,
            user_id: 0
        });
    }

    handleChange(field) {
        return (event) => {
            let value = event.target.value;
            this.setState(() => {
                return {
                    [field]: value,
                    user_id: 1
                }
            })
        }
    }

    render() {
        const buyingPower = this.props.buyingPower;
        console.log(this.props);
        return (
            <div className="outmost-cash-container">
                <div className="outer-cash-container">
                    <div className="main-details">
                        <div className="details">
                            <header>
                                <h1>Cash</h1>
                                <h1>{formatter.format(buyingPower)}</h1>
                                {/* <img src={window.balloon} /> */}
                            </header>
                            <section className="history">
                                <div>
                                    <h2>Recent history</h2>
                                </div>
                                <div>
                                    <ul>
                                        <li>Transfer</li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                        <div className="side-panel">
                            <form onSubmit={this.handleSubmit}>
                                <header>
                                    <select onChange={this.handleChange('transfer_type')}>
                                        <option>Deposit</option>
                                        <option>Withdraw</option>
                                    </select>
                                </header>
                                <div>
                                    <p>From</p>
                                    <select>
                                        <option>Universal Bank</option>
                                        <option>Robinhodl</option>
                                    </select>
                                </div>
                                <div>
                                    <p>To</p>
                                    <select>
                                        <option>Robinhodl</option>
                                        <option>Universal Bank</option>
                                    </select>
                                </div>
                                <div>
                                    <p>Amount</p>
                                    <input
                                        value={this.state.value}
                                        placeholder="$0"
                                        onChange={this.handleChange('amount')}
                                        required/>
                                </div>
                                <div>
                                    <button type="submit">Transfer</button>
                                    {/* <button>Transfer</button> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cash;

let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
})
