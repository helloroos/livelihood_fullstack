import React from 'react';
import { Link } from 'react-router-dom';
import TokenIndexItem from './token_index_item';

class TokenIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchTokens();
    }

    render() {
        let tokens = this.props.tokens;
        let tokenItems;
        if (typeof this.props.tokens === 'undefined') {
            return <p>Loading...</p>
        } else {
            tokenItems = tokens.map((token) => {
                return <TokenIndexItem key={token.id} token={token} />
            })
            return (
                <div>
                    <h1>All tokens</h1>
                    <ul>{tokenItems}</ul>
                </div>
            )
        }
    }
}

export default TokenIndex;