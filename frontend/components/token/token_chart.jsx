// import { LineChart, Line, Tooltip, YAxis, XAxis } from 'recharts';
import React from 'react';
import { useSelector } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { format, parseISO, subDays } from 'date-fns';

export default function TokenChart() {

  const token = useSelector((state) => state.entities.tokenInfo.token);

  const data = [];

  for (let num = 30; num >= 0; num--) {
    if (num === 30) {
      let past_market_price;
      let change;
      if (token.change_thirty_d > 0) {
        change = (100 + token.change_thirty_d) / 100;
        past_market_price = token.market_price / change;
      } else {
        change = (100 - token.change_thirty_d) / 100;
        past_market_price = token.market_price / change;
      }
      data.push({
        date: subDays(new Date(), num).toISOString().slice(0, 10),
        // value: parseInt(token.market_price - token.change_thirty_d)
        value: parseInt(past_market_price)
      })
    } else if (num === 0) {
      data.push({
        date: subDays(new Date(), num).toISOString().slice(0, 10),
        value: parseInt(token.market_price)
      })
    } else {
      data.push({
        date: subDays(new Date(), num).toISOString().slice(0, 10),
        value: parseInt((Math.random() * token.market_price) + token.market_price - token.change_thirty_d)
      })
    }
  }

  const customToolTip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div className="tooltip">
          <p>{label}</p>
          <p>${payload[0].value.toLocaleString('en')}</p>
        </div>
      )
    }
    return null;
  }

  return (
    <LineChart
      // margin={{
      //   top: 5,
      //   right: 30,
      //   left: 20,
      //   bottom: 5
      // }}
      width={600}
      height={200}
      data={dailyData(data)}>
      <XAxis
        dataKey="date"
        hide={true} />
      <YAxis
        dataKey="value"
        hide={true} />
      <Tooltip
        // offset={0}
        // position={{ y: 0 }}
        isAnimationActive={false}
        // allowEscapeViewBox={{ x: true, y: true }}
        content={customToolTip}
        // wrapperStyle={{ top: 0 }}
        // position={{ x: 'auto', y: 80 }} 
        />
      <Line
        type="linear"
        dataKey="value"
        stroke="#29c446"
        // stroke="#ff3d12" // if negative
        activeDot={{ r: 5 }}
        dot={false}
        strokeWidth={0.7}
      />
    </LineChart>
  )
}