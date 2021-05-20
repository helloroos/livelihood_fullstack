import { LineChart, Line, Tooltip, YAxis, XAxis } from 'recharts';
import React from 'react';

const data = [
    {
        date: "2021-05-18",
        value: 4000
    },
    {
        date: "2021-05-19",
        value: 3000
    },
];

class PortfolioChart extends React.Component {
    constructor(props) {
        super(props)
        this.currentUser = this.props.currentUser;
        this.chartData = this.chartData.bind(this);
    }

    componentDidMount() {
        if (typeof (this.props.transfers) == "undefined") {
            // if (Object.keys(this.props.buyingPower).length == 0) {
            this.props.fetchUser(this.currentUser);
        }
    }
        
    chartData() {
        for (const transfer in this.props.transfers.transfers) {
            console.log(transfer);
        }
    }
        
    render() {
        if (typeof (this.props.transfers) == "undefined") {
            return <p>Loading...</p>
        } else {
            return (
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
        );
        }
    }
}

export default PortfolioChart;