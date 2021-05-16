import React from 'react';

class TokenShow extends React.Component {
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
        let tokenId = this.props.match.params.tokenId;
        this.props.fetchToken(tokenId);
    }
    
    render() {
        let tokenId = this.props.match.params.tokenId;
        let token = this.props.token[tokenId];
        if (typeof(token) == "undefined") {
            return <p>Loading...</p>
        } else {
            return (
                <div className="outmost-token-container">
                    <div className="outer-token-container">
                        <div className="details-row">
                            <div className="details">
                                <header>
                                    <h1>{token.token}</h1>
                                    <h1>${token.market_price}</h1>
                                    <p>+$194.51 (+103.16%) Past 5 Years</p>
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
                                <section>
                                    <div className="your-details">
                                        <div>Your Market Value</div>
                                        <div>Your Average Cost</div>
                                    </div>
                                </section>
                                    <div>
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
                                        Amount in USD
                                        <input placeholder="$0.00" form="buy_token" />
                                    <p>Estimated price</p>
                                    <p>Estimated BTC</p>
                                    <button>Order</button>
                                    <p>$44 available</p>
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