import React, { useEffect } from 'react';
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
        if (Object.keys(tokens).length === 0) {
            console.log("Loading...");
            return <p>Loading...</p>
        }
        return (
            <div>
                <Link to="/tokens/bitcoin">BitCoin</Link>
            </div>
        )
    }
}

export default TokenIndex;

// Fetch all tokens
// Iterate over each token and list them on the page
// Link to each token sub container and pass down props