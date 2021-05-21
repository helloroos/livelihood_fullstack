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
                        marketPrice: this.props.token[this.tokenId].market_price,
                        priceChange: this.props.token[this.tokenId].change_one_d,
                    }
                })
            })
    }

    render() {
        let asset = this.props.asset;
        let priceChange = this.state.priceChange.toFixed(2);
        return (
            <Link to={"/tokens/bitcoin"}>
                <li className="asset">
                    <div className="asset-info">
                        <p className="asset-name">{asset[0].toUpperCase()}</p>
                        <p>{asset[1]} tokens</p>
                    </div>
                    <div className="asset-pricing">
                        <p>{formatter.format(asset[1] * this.state.marketPrice)}</p>
                        <p className={isPositive(priceChange) ? "green" : "red"}>
                            {priceChange}%</p>
                    </div>
                </li>
            </Link>
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

let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
})

let isPositive = (string) => {
    if (parseFloat(string) > 0) {
        return true;
    }
    return false;
}