import React from 'react';
import { Link } from 'react-router-dom';

class AssetDetail extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let asset = this.props.asset;
        return (
            <div>
                <div>
                    <span>
                        <p>{asset[0].toUpperCase()}</p>
                        <p>{asset[1]} tokens</p>
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