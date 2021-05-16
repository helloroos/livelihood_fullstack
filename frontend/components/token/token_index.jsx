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
        if (Object.keys(tokens).length == 0) {
            return <p>Loading...</p>
        } else {
            tokenItems = tokens.map((token) => {
                return <TokenIndexItem key={token.id} token={token} />
            })
            return (
                <div>
                    <h1>All tokens</h1>
                    <ul>{tokenItems}</ul>
                    {/* <Link to="/tokens/bitcoin">BitCoin</Link> */}
                </div>
            )
        }
    }
}

export default TokenIndex;

// Fetch all tokens
// Iterate over each token and list them on the page
// Link to each token sub container and pass down props