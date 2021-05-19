import React from 'react';

class Portfolio extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props);
        return (
            <div className="outmost-portfolio-container">
                <div className="outer-portfolio-container">
                    <div className="feed-container">
                        <div className="feed">
                            <header>
                                <h1>$4</h1>
                            </header>
                            <section>
                                <img className="graph-dummy" src={window.graph_dummy} />
                                <div>
                                    <button>1D</button>
                                    <button>1W</button>
                                    <button>1M</button>
                                    <button>3M</button>
                                    <button>1Y</button>
                                    <button>5Y</button>
                                </div>
                            </section>
                            <section className="buying-power">
                                <h2>Buying Power</h2>
                            </section>
                            <section className="news">
                                <h2>News</h2>
                            </section>
                        </div>
                        <div className="side-panel">
                            <header>
                                <h3>Cryptocurrencies</h3>
                            </header>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio;