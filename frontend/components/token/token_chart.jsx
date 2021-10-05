// import { LineChart, Line, Tooltip, YAxis, XAxis } from 'recharts';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import React from 'react';

const data = [
    {
        date: '2021-05-01',
        value: 2400,
    },
    {
        date: '2021-05-07',
        value: 5600,
    },
    {
        date: '2021-05-14',
        value: 8520,
    },
    {
        date: '2021-05-28',
        value: 12569,
    },
];

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

class TokenChart extends React.Component {
    constructor(props) {
        super(props)
        // this.currentUser = this.props.currentUser;
        this.tokenId = this.props.tokenId;
    }
    
    componentDidMount() {
        
    }
    
    render() {
        const token = this.props.token[this.tokenId];
        
        let test = [];
        let max = token.market_price;
        let min = max * (100 - token.change_one_d);

        for (let i = 0; i < 48; i++) {
            if (i === 0) {
                test.push({
                    date: i,
                    value: min
                })
            } else if (i === 48) {
                test.push({
                    date: i,
                    value: max
                })
            }
            test.push({
                date: i,
                value: randomNum(min, max)
            })
        }

        return (
            <LineChart
                width={600}
                height={250}
                data={test}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}>
                <XAxis
                    dataKey="date"
                    hide={true} />
                <YAxis
                    hide={true} />
                <Tooltip
                    offset={0}
                    isAnimationActive={false}
                    allowEscapeViewBox={{ x: true, y: true }}
                    // content={customToolTip}
                    position={{ x: 'auto', y: 80 }} />
                <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#29c446"
                    // stroke="#ff3d12" // if negative
                    activeDot={{ r: 1 }}
                    dot={false}
                    strokeWidth={0.7}
                />
            </LineChart>
        );
    }

}

export default TokenChart;