import React from 'react';
import token_show_container from './token_show_container';

class TokenShow extends React.Component {
    constructor(props) {
        super(props)
        this.tokenId = this.props.match.params.tokenId;
        this.state = {
            token_sym: "",
            number: 0,
            market_price: 0,
            amount: 0,
            order_type: "",
            user_id: 0
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.buyingPower = this.buyingPower.bind(this);
    }

    componentDidMount() {
        this.props.fetchToken(this.tokenId);
    }

    handleSubmit(event) {
        event.preventDefault();
        const orderDetails = Object.assign({}, this.state);
        this.props.order(orderDetails);
    }

    handleChange(event) {
        // this.setState({ amount: event.currentTarget.value });
        this.setState(() => {
            return {
                token_sym: this.tokenId,
                number: event.target.value,
                market_price: this.props.token[this.tokenId].market_price,
                amount: this.state.number * this.state.market_price,
                order_type: "buy",
                user_id: 1
            }
        })
    }

    // buyingPower() {
    //     let total = 0;
    //     if (this.props.transfers == 'undefined') {
    //         return null;
    //     } else {
    //         this.props.transfers.forEach((element) => {
    //             if (element.transfer_type == "deposit") {
    //                 total = total + element.amount;
    //             } else {
    //                 total = total - element.amount;
    //             }
    //         })
    //         return total;
    //     }
    // }

    render() {
        let token = this.props.token[this.tokenId];
        if (typeof(token) == "undefined") {
        // if (Object.keys(token).length == 0) {
            return <p>Loading...</p>
        } else {
            let total = this.state.number * token.market_price;
            console.log(this.props.order);
            return (
                <div className="outmost-token-container">
                    <div className="outer-token-container">
                        <div className="details-row">
                            <div className="details">
                                <header>
                                    <h1>{token.token}</h1>
                                    <h1>${token.market_price}</h1>
                                    <p>${token.change_one_d} Today</p>
                                </header>
                                <section>
                                    <img className="graph-dummy" src={window.graph_dummy} />
                                    <div>
                                        <button>1D</button>
                                        <button>1W</button>
                                        <button>1M</button>
                                        <button>3M</button>
                                        <button>1Y</button>
                                        <button>5Y</button>
                                    </div>
                                </section>
                                {/* <section>
                                    <div className="your-details">
                                        <div>Your Market Value</div>
                                        <div>Your Average Cost</div>
                                    </div>
                                </section> */}
                                    <div className="about">
                                        <h1>About</h1>
                                        <p>{token.about}</p>
                                    </div>
                                <section>
                                </section>
                                <section>
                                </section>
                                <section>
                                </section>
                                <section>
                                </section>
                                <section>
                                </section>
                            </div>



                            <div className="side-panel">
                                <div className="form">
                                    <form onSubmit={this.handleSubmit}>
                                        <header>
                                            <select>
                                                <option>Buy</option>
                                                <option>Sell</option>
                                            </select>
                                        </header>
                                        <div className="tokens">
                                            <p>Tokens</p>
                                            <input 
                                                placeholder="0" 
                                                onChange={this.handleChange}
                                                required/>
                                        </div>
                                        <div className="price">
                                            <p>Market Price</p>
                                            <p>${token.market_price}</p>
                                        </div>
                                        <div className="cost">
                                            <p>Estimated cost</p>
                                            <p>${total}</p>
                                        </div>
                                        <div className="buying-power">
                                            <p>Buying power</p>
                                            {/* <p>${this.buyingPower()}</p> */}
                                        </div>
                                        <div className="button">
                                            <button>Order</button>
                                        </div>
                                    </form>
                                    <br />
                                </div>
                            <button>Add to wishlist</button>
                            </div>



                        </div>
                    </div>

                </div>
            )
        }

    }
}

export default TokenShow;