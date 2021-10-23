// import { LineChart, Line, Tooltip, YAxis, XAxis } from 'recharts';
import React from 'react';
import { useSelector } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { format, parseISO, subDays } from 'date-fns';

function customToolTip({ active, payload, label }) {
  if (active) {
    return (
      <div className="tooltip">
        <h4>{label}</h4>
      </div>
    )
  }
  return null;
}

export default function TokenChart() {

  const token = useSelector((state) => state.entities.tokenInfo.token);

  const data = [];

  for (let num = 30; num >= 0; num--) {
    if (num === 30) {
      data.push({
        date: subDays(new Date(), num).toISOString().slice(0, 10),
        value: parseInt(token.market_price - token.change_thirty_d)
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

  console.log(data);
  return (
    <div>
        <LineChart
          // margin={{
          //   top: 5,
          //   right: 30,
          //   left: 20,
          //   bottom: 5
          // }}
          width={600}
          height={250}
          data={data}>
          <XAxis
            dataKey="date"
            // type="number"
            hide={true} />
          {/* <Legend /> */}
          <YAxis
            dataKey="value"
            // type="category"
            hide={true} />
          <Tooltip
            offset={0}
            isAnimationActive={false}
            allowEscapeViewBox={{ x: true, y: true }}
            // content={customToolTip}
            position={{ x: 'auto', y: 80 }} />
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
      {/* <ResponsiveContainer width="100%" height="100%">

      </ResponsiveContainer> */}
    </div>
  )
}