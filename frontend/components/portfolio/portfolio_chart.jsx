import { ResponsiveContainer, LineChart, Line, Tooltip, YAxis, XAxis, Area, CartesianGrid, AreaChart } from 'recharts';
import React, { useState } from 'react';
import { format, parseISO, subDays } from 'date-fns';
import { useSelector } from 'react-redux';

export default function PortfolioChart({ transfers, currentPortfolioValue }) {

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

  if (!currentPortfolioValue) {
    return null;
  } else {
    
    let data = []

    for (let i = 0; i < currentPortfolioValue.length; i++) {
      let currentDate = currentPortfolioValue[i].created_at.slice(0, 10);
      let currentValue = parseInt(currentPortfolioValue[i].amount);

      data.push({
        date: currentDate,
        value: currentValue
      })
    }
  
    return (
      <LineChart
      // margin={{
      //   top: 5,
      //   right: 30,
      //   left: 20,
      //   bottom: 5
      // }}
        width={690}
        height={250}
        data={data}>
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
        {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
      </LineChart>
    )
  }
  // if (!transfers) {
  //   return null;
  // } else {
    
  //   let data = []

  //   for (let i = 0; i < transfers.length; i++) {
  //     let currentDate = transfers[i].created_at.slice(0, 10);
  //     let currentValue = 0;

  //     if ([transfers[i].transfer_type] === "Deposit") {
  //       currentValue = currentValue + parseInt(transfers[i].amount);
  //     } else {
  //       currentValue = currentValue - parseInt(transfers[i].amount);
  //     }

  //     data.push({
  //       date: currentDate,
  //       value: currentValue
  //     })
  //   }
  
  //   return (
  //     <LineChart
  //     // margin={{
  //     //   top: 5,
  //     //   right: 30,
  //     //   left: 20,
  //     //   bottom: 5
  //     // }}
  //       width={690}
  //       height={250}
  //       data={data}>
  //       <XAxis
  //         dataKey="date"
  //         hide={true} />
  //       <YAxis
  //         dataKey="value"
  //         hide={true} />
  //       <Tooltip
  //         // offset={0}
  //         // position={{ y: 0 }}
  //         isAnimationActive={false}
  //         // allowEscapeViewBox={{ x: true, y: true }}
  //         content={customToolTip}
  //       // wrapperStyle={{ top: 0 }}
  //       // position={{ x: 'auto', y: 80 }} 
  //       />
  //       <Line
  //         type="linear"
  //         dataKey="value"
  //         stroke="#29c446"
  //         // stroke="#ff3d12" // if negative
  //         activeDot={{ r: 5 }}
  //         dot={false}
  //         strokeWidth={0.7}
  //       />
  //       <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
  //     </LineChart>
  //   )
  // }
}
