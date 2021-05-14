import React from 'react';

class Portfolio extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="outer-portfolio">
                <div className="portfolio-row">
                    <div className="feed">
                        FEED
                    </div>
                    <div className="side-panel">
                        SIDEPANEL
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio;