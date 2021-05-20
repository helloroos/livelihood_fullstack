import { LineChart, Line, Tooltip, YAxis, XAxis } from 'recharts';
import React from 'react';

class PortfolioChart extends React.Component {
    constructor(props) {
        super(props)
        this.currentUser = this.props.currentUser;
    }

    componentDidMount() {
        if (typeof (this.props.transfers) == "undefined") {
            this.props.fetchUser(this.currentUser);
        }
    }
        
    render() {
        let allTransfers = this.props.transfers;
        let newTransfers = {}
        for (let i = 0; i < allTransfers.length; i++) {
            let date = allTransfers[i].created_at.slice(0, 10);
            if (!newTransfers[date]) {
                newTransfers[date] = 0;
            }
            if ([allTransfers[i].transfer_type] == "Deposit") {
                newTransfers[date] = newTransfers[date] + parseInt(allTransfers[i].amount);
            } else {
                newTransfers[date] = newTransfers[date] - parseInt(allTransfers[i].amount);
            }
        }
        let assets = Object.entries(newTransfers)

        let trans = assets.map((tran) => {
            return {
                date: tran[0],
                value: tran[1]
            }
        })

        // let trans = [
        //     {
        //         date: "2021-01-01",
        //         value: "10000"
        //     },
        //     {
        //         date: "2021-01-10",
        //         value: "15000"
        //     },
        //     {
        //         date: "2021-02-10",
        //         value: "25000"
        //     },
        //     {
        //         date: "2021-03-00",
        //         value: "145000"
        //     },
        //     {
        //         date: "2021-04-25",
        //         value: "90000"
        //     },
        //     {
        //         date: "2021-05-20",
        //         value: "110000"
        //     },
        // ]

        if (typeof (this.props.transfers) == "undefined") {
            return <p>Loading...</p>
        } else {
            return (
            <LineChart
                width={500}
                height={300}
                data={trans}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line
                    type="monotone"
                    dataKey="value"
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