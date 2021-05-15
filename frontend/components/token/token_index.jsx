import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import TokenIndexItem from './token_index_item';

class TokenIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    render() {
        if (this.props) {
            const { tokens } = this.props;
            return(
                <div>
                    <ul>
                        {
                            Object.values(tokens).map((token) => (
                                token
                            ))
                        }
                    </ul>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default TokenIndex;