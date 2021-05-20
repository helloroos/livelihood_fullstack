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

        console.log(this.props);

        let allTransfers = this.props.transfers;
        let netTransactions = {}
        for (let i = 0; i < allTransfers.length; i++) {
            let date = allTransfers[i].created_at.slice(0, 10);
            if (!netTransactions[date]) {
                netTransactions[date] = 0;
            }
            if ([allTransfers[i].transfer_type] == "Deposit") {
                netTransactions[date] = netTransactions[date] + parseInt(allTransfers[i].amount);
            } else {
                netTransactions[date] = netTransactions[date] - parseInt(allTransfers[i].amount);
            }
        }
        
        let allOrders = this.props.orders;
        let netOrders = {}
        
        // let netOrderssss = {
        //     "1989-11-07": {
        //         bitcoin: 5,
        //         Ether: 6
        //     }
        // }

        for (let j = 0; j < allOrders.length; j++) {

            const date = allOrders[j].created_at.slice(0, 10);
            const token_symbol = allOrders[j].token_sym;

            if (!netOrders[date]) {
                netOrders[date] = {}
            }
            if (!netOrders[date][token_symbol]) {
                netOrders[date][token_symbol] = 0;
            }

            if (allOrders[j].order_type == "Buy") {
                netOrders[date][token_symbol] = netOrders[date][token_symbol] + allOrders[j].number;
            } else {
                netOrders[date][token_symbol] = netOrders[date][token_symbol] - allOrders[j].number;
            }
        }

        // let assetssss = [
        //     ["1989-11-07", 1000]
        // ]

        let assets = Object.entries(netTransactions)
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
        //     }
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