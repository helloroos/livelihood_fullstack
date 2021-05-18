import React from 'react';
import token_show_container from './token_show_container';

class TokenShow extends React.Component {
    constructor(props) {
        super(props)

        this.tokenId = this.props.match.params.tokenId;
        this.state = {
            token: this.props.fetchToken(this.tokenId), 
            order_value: 0
        }

        this.handleOrderChange = this.handleOrderChange.bind(this);
    }

    componentDidMount() {
        // this.interval = setInterval(() => this.setState({ token: this.props.fetchToken(this.tokenId) }), 1000);
    }
    
    componentWillUnmount() {
        // clearInterval(this.interval);
    }

    handleOrderChange(event) {
        this.setState({ order_value: event.currentTarget.value });
    }

    render() {
        // let tokenId = this.props.match.params.tokenId;
        let token = this.props.token[this.tokenId];
        if (typeof(token) == "undefined") {
            return <p>Loading...</p>
        } else {
            let total = this.state.order_value * token.market_price;
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
                                    <form id="buy_token"></form>
                                    <header>
                                        <h1>Buy BTC</h1>
                                    </header>
                                    <div className="tokens">
                                        <p>Tokens</p>
                                        <input 
                                            placeholder="0" 
                                            // form="buy_token" 
                                            // value={this.state.order_value}
                                            onChange={this.handleOrderChange}
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
                                        <p>$44 available</p>
                                    </div>
                                    <div className="button">
                                        <button>Order</button>
                                    </div>
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