import { ResponsiveContainer, LineChart, Line, Tooltip, YAxis, XAxis, Area, CartesianGrid, AreaChart } from 'recharts';
import React, { useState } from 'react';
import { format, parseISO, subDays } from 'date-fns';
import { useSelector } from 'react-redux';

// let data = [{
//   date: "09-10-2021",
//   value: 2000
//   },{
//   date: "09-11-2021",
//   value: 3000
//   }, {
//   date: "09-12-2021",
//     value: 2500
//   }];

export default function PortfolioChart({ transfers }) {

  if (!transfers) {
    return null;
  } else {
    
    let data = []

    for (let i = 0; i < transfers.length; i++) {
      let currentDate = transfers[i].created_at.slice(0, 10);
      let currentValue = 0;

      if ([transfers[i].transfer_type] === "Deposit") {
        currentValue = currentValue + parseInt(transfers[i].amount);
      } else {
        currentValue = currentValue - parseInt(transfers[i].amount);
      }

      data.push({
        date: currentDate,
        value: currentValue
      })
    }
    
    let test = [];
    let min = 9245;
    let max = 15364;
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
        width={690}
        height={250}
        data={data}
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
          // position={{ x: 'auto', y: 80 }} 
          content={customToolTip} />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#29c446"
          // stroke="#ff3d12" // if negative
          activeDot={{ r: 1 }}
          dot={false}
          strokeWidth={0.7}
        />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    )
  }
}

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

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// class PortfolioChart extends React.Component {
//   constructor(props) {
//     super(props)
//     this.currentUser = this.props.currentUser;
//   }

//   componentDidMount() {
//     if (typeof (this.props.transfers) == "undefined") {
//       this.props.fetchUser(this.currentUser);
//     }
//   }

//   render() {

//     let allTransfers = this.props.transfers;
//     let netTransactions = {}
//     for (let i = 0; i < allTransfers.length; i++) {
//       let date = allTransfers[i].created_at.slice(0, 10);
//       if (!netTransactions[date]) {
//         netTransactions[date] = 0;
//       }
//       if ([allTransfers[i].transfer_type] == "Deposit") {
//         netTransactions[date] = netTransactions[date] + parseInt(allTransfers[i].amount);
//       } else {
//         netTransactions[date] = netTransactions[date] - parseInt(allTransfers[i].amount);
//       }
//     }

//     // let assetssss = [
//     //     ["1989-11-07", 1000]
//     // ]


//     let allOrders = this.props.orders;
//     let netOrders = {}

//     for (let j = 0; j < allOrders.length; j++) {

//       const date = allOrders[j].created_at.slice(0, 10);
//       const token_symbol = allOrders[j].token_sym;

//       if (!netOrders[date]) {
//         netOrders[date] = {}
//       }
//       if (!netOrders[date][token_symbol]) {
//         netOrders[date][token_symbol] = 0;
//       }

//       if (allOrders[j].order_type == "Buy") {
//         netOrders[date][token_symbol] = netOrders[date][token_symbol] + allOrders[j].number;
//       } else {
//         netOrders[date][token_symbol] = netOrders[date][token_symbol] - allOrders[j].number;
//       }
//     }

//     // let netOrderssss = {
//     //     "1989-11-07": {
//     //         SNX: 5,
//     //         Ether: 6
//     //     }
//     // }

//     let assets = Object.entries(netTransactions)
//     let trans = assets.map((tran) => {
//       return {
//         date: tran[0],
//         value: tran[1]
//       }
//     })

//     // let trans = [
//     //     {
//     //         date: "2021-01-01",
//     //         value: "10000"
//     //     },
//     //     {
//     //         date: "2021-01-10",
//     //         value: "15000"
//     //     }
//     // ]

//     let test = [];
//     let min = 9245;
//     let max = 15364;
//     for (let i = 0; i < 48; i++) {
//       if (i === 0) {
//         test.push({
//           date: i,
//           value: min
//         })
//       } else if (i === 48) {
//         test.push({
//           date: i,
//           value: max
//         })
//       }
//       test.push({
//         date: i,
//         value: randomNum(min, max)
//       })
//     }

//     if (typeof (this.props.transfers) == "undefined") {
//       return <p>Loading...</p>
//     } else {
//       return (
//         <LineChart
//           width={600}
//           height={250}
//           data={test}
//           margin={{
//             top: 5,
//             right: 30,
//             left: 20,
//             bottom: 5
//           }}>
//           <XAxis
//             dataKey="date"
//             hide={true} />
//           <YAxis
//             hide={true} />
//           <Tooltip
//             offset={0}
//             isAnimationActive={false}
//             allowEscapeViewBox={{ x: true, y: true }}
//             // position={{ x: 'auto', y: 80 }} 
//             content={customToolTip} />
//           <Line
//             type="monotone"
//             dataKey="value"
//             stroke="#29c446"
//             // stroke="#ff3d12" // if negative
//             activeDot={{ r: 1 }}
//             dot={false}
//             strokeWidth={0.7}
//           />
//           <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
//         </LineChart>
//       );
//     }
//   }
// }

// function customToolTip({ active, payload, label }) {
//   if (active) {
//     return (
//       <div className="tooltip">
//         <h4>{label}</h4>
//       </div>
//     )
//   }
//   return null;
// }

// function randomNum(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min)
// }

// export default PortfolioChart;