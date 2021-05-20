import React from 'react';
import { Link } from 'react-router-dom';

class AssetDetail extends React.Component {
    constructor(props) {
        super(props)
        this.tokenId = props.asset[0];
        this.state = {
            marketPrice: 0,
            priceChange: 0
        }
    }

    componentDidMount() {
        this.props.fetchToken(this.tokenId)
            .then(() => {
                this.setState(() => {
                    return {
                        marketPrice: this.props.tokens[this.tokenId].market_price,
                        priceChange: this.props.tokens[this.tokenId].change_one_d,
                    }
                })
            })
    }

    render() {
        let asset = this.props.asset;
        return (
            <div>
                <div>
                    <div>
                            <Link to={"/tokens/bitcoin"}>
                        <span>
                                <p>{asset[0].toUpperCase()}</p>
                                <p>{asset[1]} tokens</p>
                        </span>
                        <span>
                            <p>${asset[1] * this.state.marketPrice}</p>
                            <p>%{this.state.priceChange}</p>
                        </span>
                            </Link>
                    </div>
                </div>
            </div>
        )

        // if (!Array.isArray(this.props.tokens)) {
        //     <p>Loading...</p>
        // } else {
            // let marketPrice = this.props[this.tokenId].market_price;
            // return (
            // )
        // }
    }
}

export default AssetDetail;