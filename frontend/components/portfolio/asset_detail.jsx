import React from 'react';
import { Link } from 'react-router-dom';

class AssetDetail extends React.Component {
    constructor(props) {
        super(props)
        // this.tokenId = this.props.asset[0];
    }

    componentDidMount() {
        // this.props.fetchToken();
    }

    render() {
        let asset = this.props.asset;

        // let allTokens = this.props.tokens;
        // for (let i = 0; i < allTokens.length; i++) {
        //     let ele = allTokens[i];
        //     console.log(ele);
        //     console.log(ele.symbol);
        //     console.log(ele.id);
        //     console.log(asset[0]);
        //     // if (ele.symbol == asset[0]) {
        //     //     asset.push(ele.id)
        //     // }
        // }
        return (
            <div>
                <div>
                    <span>
                        <Link to={"/tokens/bitcoin"}>
                            <p>{asset[0].toUpperCase()}</p>
                            <p>{asset[1]} tokens</p>
                        </Link>
                    </span>
                    <span>
                        <p>$124</p>
                        <p>$4%</p>
                    </span>
                </div>
            </div>
        )
    }
}

export default AssetDetail;