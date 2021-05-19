import React from 'react';

class Portfolio extends React.Component {
    constructor(props) {
        super(props)
        this.currentUser = this.props.currentUser;
    }
    
    componentDidMount() {
        if (typeof (this.props.buyingPower) == "undefined") {
        // if (Object.keys(this.props.buyingPower).length == 0) {
            this.props.fetchUser(this.currentUser);
        }
    }
    
    render() {
        if (typeof (this.props.buyingPower) == "undefined") {
            return <p>Loading...</p>
        } else {
            const buyingPower = this.props.buyingPower;
            return (
                <div className="outmost-portfolio-container">
                    <div className="outer-portfolio-container">
                        <div className="feed-container">
                            <div className="feed">
                                <header>
                                    <h1>${buyingPower}</h1>
                                </header>
                                <section>
                                    <img className="graph-dummy" src={window.graph_dummy} />
                                </section>
                                <section className="buying-power">
                                    <h2>Buying Power</h2>
                                    <p>${buyingPower}</p>
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
}

export default Portfolio;