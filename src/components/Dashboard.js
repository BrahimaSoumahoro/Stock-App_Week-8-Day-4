import data from '../data'
// import { useState } from 'react'
import { Link } from 'react-router-dom'

function Dashboard(props){
    // console.log(props.data);
    return(
      <>
      <h1>Stock</h1>
      <h2>

        {/* function DataMap(){ */}
          {props.data.map((stock) => {
            // console.log(stock);
            // console.log(data);
            return(
              <div key={stock.symbol}>
              
              {/* <h2>{stock.name}</h2> */}
              <Link to={`/stock/${stock.symbol}`}>{stock.name}</Link>
              <p>{stock.lastPrice}</p>
            <p>{stock.change}</p>
            </div>
            )
          })
        }
        </h2>
      </>
    )
}

export default Dashboard;