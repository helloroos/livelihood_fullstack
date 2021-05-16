import React from 'react';
import { Link } from 'react-router-dom';

class TokenIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const token = this.props.token;
        return (
            <div>
                <li><Link to={`/tokens/${token.symbol}`}>{token.name}</Link></li>
            </div>
        )
    }
}

export default TokenIndexItem;