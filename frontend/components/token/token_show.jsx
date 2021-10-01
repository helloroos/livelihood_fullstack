import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import TokenChart from './token_chart';
import token_show_container from './token_show_container';
import TokenSidePanel from './token_side_panel';

export default function TokenShow(props) {
  
    useEffect(() => {
      document.title = `${tokenId.slice(0, 1).toUpperCase() + tokenId.slice(1).toLowerCase()} | Robinhodl`;
    });

  const dispatch = useDispatch();
  const [about, setAbout] = useState("")
  // const [buyingPower, setBuyingPower] = useState(0);
  const buyingPower = useSelector((state) => state.entities.buyingPower);
  const [marketPrice, setMarketPrice] = useState(0)
  const [oneDayChange, setOneDayChange] = useState(0)
  
  const currentUser = useSelector((state) => state.session.currentUserId)
  // const currentUser = useSelector((state) => state.session.currentUser.id)
  const tokenId = props.match.params.tokenId;

  // const token = useSelector((state) => state.entities.tokens.token)

  // useEffect(() => {
  //   dispatch(fetchUser(currentUser))
  //     .then((res) => {
  //       setBuyingPower(res.user.buyingPower)
  //     })
  // }, [currentUser]);

  useEffect(() => {
    dispatch(fetchToken(tokenId))
    .then((res) => {
      setMarketPrice(res.token.market_price)
      setOneDayChange(res.token.change_one_d)
      setAbout(res.token.about)
    })
  }, [tokenId])

  return (
    <div id="token-container">
      <div id="token-content">
        <div id="feed-container">
          <div id="feed">

            <div id="header-container">
              <h1>{tokenId.slice(0, 1).toUpperCase() + tokenId.slice(1).toLowerCase()}</h1>
              <h1>${marketPrice.toLocaleString('en')}</h1>
              <div id="change-container">
                <p id="change">${oneDayChange.toLocaleString('en')}</p>
                <p id="period">Today</p>
              </div>
            </div>

            <div id="chart-container">
              Chart here
              {/* <TokenChart
                token={this.props.token}
                tokenId={this.props.match.params.tokenId} /> */}
            </div>

            <div id="about-container">
              {/* <div id="header"> */}
              <h2>About</h2>
              {/* </div> */}
              <p>{about}</p>
            </div>
{/* 
            <div id="stats-container">
              <h2>Key Statistics</h2>
              <p>Stats go here</p>
            </div> */}

            <div id="news-container">
              <div id="header">
                <h2>News</h2>
              </div>

              <div id="article-container">
                <a href="#" target="_blank">
                  <div id="text-container">
                    <div id="first-row">
                      <p id="url">www.google.com</p>
                      <p>09-09-2021</p>
                    </div>
                    <div id="second-row">
                      <h3>Here is a pretty long and decent sized article title that fills out space</h3>
                    </div>
                  </div>
                  <img src="https://media.istockphoto.com/photos/coins-of-various-cryptocurrencies-picture-id1034363382?k=20&m=1034363382&s=612x612&w=0&h=sCpRmOSicsJJS73_iNQh16nqeBgFKqU3jjfC4u42D_k=" alt="" />
                </a>
              </div>
            </div>
          </div>
          <TokenSidePanel marketPrice={marketPrice} buyingPower={buyingPower} dispatch={dispatch} tokenId={tokenId}/>
        </div>
      </div>
    </div>
  )
}

class TokenShowOld extends React.Component {

  handleSubmit(event) {
    event.preventDefault();
    const orderDetails = Object.assign({}, this.state);
    this.props.makeOrder(orderDetails);
  }

  handleChange(field) {
    return (event) => {
      this.setState(() => {
        const value = event.target.value;
        return {
          [field]: value,
          token_sym: this.tokenId,
          market_price: this.props.token[this.tokenId].market_price,
          amount: this.state.number * this.state.market_price,
          user_id: 1
        }
      })
    }
  }

  render() {
    let token = this.props.token[this.tokenId];
    if (typeof (token) == "undefined") {
      // if (Object.keys(token).length == 0) {
      return <p>Loading...</p>

    } else {
      let total = this.state.number * token.market_price;
      return (

        <div className="details-row">
          <div className="details">
            <section>
              {/* <img className="graph-dummy" src={window.graph_dummy} /> */}
              <TokenChart
                token={this.props.token}
                tokenId={this.props.match.params.tokenId} />
            </section>
          </div>
        </div>
      )
    }

  }
}

// class TokenShow extends React.Component {
//   constructor(props) {
//     super(props)
//     this.tokenId = this.props.match.params.tokenId;
//     this.state = {
//       token_sym: "",
//       number: 0,
//       market_price: 0,
//       amount: 0,
//       order_type: "Buy",
//       user_id: 0
//     }

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   componentDidMount() {
//     this.props.fetchToken(this.tokenId);
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     const orderDetails = Object.assign({}, this.state);
//     this.props.makeOrder(orderDetails);
//   }

//   handleChange(field) {
//     return (event) => {
//       this.setState(() => {
//         const value = event.target.value;
//         return {
//           [field]: value,
//           token_sym: this.tokenId,
//           market_price: this.props.token[this.tokenId].market_price,
//           amount: this.state.number * this.state.market_price,
//           user_id: 1
//         }
//       })
//     }
//   }

//   render() {
//     let token = this.props.token[this.tokenId];
//     if (typeof (token) == "undefined") {
//       // if (Object.keys(token).length == 0) {
//       return <p>Loading...</p>
//     } else {
//       let total = this.state.number * token.market_price;
//       return (
//         <div className="outmost-token-container">
//           <div className="outer-token-container">
//             <div className="details-row">
//               <div className="details">
//                 <header>
//                   <h1>{token.token}</h1>
//                   <h1>${token.market_price}</h1>
//                   <p>${token.change_one_d} Today</p>
//                 </header>
//                 <section>
//                   {/* <img className="graph-dummy" src={window.graph_dummy} /> */}
//                   <TokenChart
//                     token={this.props.token}
//                     tokenId={this.props.match.params.tokenId} />
//                 </section>
//                 <div className="about">
//                   <h1>About</h1>
//                   <p>{token.about}</p>
//                 </div>
//                 <section>
//                 </section>
//                 <section>
//                 </section>
//                 <section>
//                 </section>
//                 <section>
//                 </section>
//                 <section>
//                 </section>
//               </div>



//               <div className="side-panel">
//                 <div className="form">
//                   <form onSubmit={this.handleSubmit}>
//                     <header>
//                       <select onChange={this.handleChange('order_type')}>
//                         <option>Buy</option>
//                         <option>Sell</option>
//                       </select>
//                     </header>
//                     <div className="tokens">
//                       <p>Tokens</p>
//                       <input
//                         placeholder="0"
//                         onChange={this.handleChange('number')}
//                         required />
//                     </div>
//                     <div className="price">
//                       <p>Market Price</p>
//                       <p>${token.market_price}</p>
//                     </div>
//                     <div className="cost">
//                       <p>Estimated cost</p>
//                       <p>${total}</p>
//                     </div>
//                     <div className="buying-power">
//                       <p>Buying power</p>
//                       {/* <p>${this.buyingPower()}</p> */}
//                     </div>
//                     <div className="button">
//                       <button>Order</button>
//                     </div>
//                   </form>
//                   <br />
//                 </div>
//                 <button>Add to wishlist</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )
//     }

//   }
// }

// export default TokenShow;