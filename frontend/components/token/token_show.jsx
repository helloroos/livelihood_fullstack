import React from 'react';

class TokenShow extends React.Component {
    constructor(props) {
        super(props)
        console.log(props);
    }

    render() {
        return (
            <div className="outer-token-container">
                <div className="details-row">
                    <div className="details">
                        <header>
                            <h1>{this.props.token}</h1>
                            <h1>$456</h1>
                            <p>+$194.51 (+103.16%) Past 5 Years</p>
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
                        <section>
                            <div>Your Market Value</div>
                            <div>Your Average Cost</div>
                        </section>
                        <section>
                            <div>About</div>
                        </section>
                        <section>
                            <div>Key Statistics</div>
                        </section>
                        <section>
                            <div>Related Lists</div>
                        </section>
                        <section>
                            <div>History</div>
                        </section>
                        <section>
                            <div>People Also Own</div>
                        </section>
                    </div>
                    <div className="side-panel">
                    </div>
                </div>
            </div>
        )
    }
}

export default TokenShow;