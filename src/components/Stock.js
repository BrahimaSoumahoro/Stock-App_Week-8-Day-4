import data from '../data'
import { useParams, useEffect, useState } from 'react-router-dom';

function Stock(props){
    const params = useParams();
    console.log(params.symbol);
    console.log(props);
    // switch(props){
    //     case 'AAPL':
    //         return 
    // }
    console.log(params);
    return(
        data.map((stock) => {
            if(stock.symbol == params.symbol){
                console.log(stock);
                return(
                    <div>
                    <h2><strong>Name:</strong>{stock.name}</h2>
                    <p><strong>Symbol:</strong>{stock.symbol}</p>
                    <p><strong>High:</strong>{stock.high}</p>
                    <p><strong>Change:</strong>{stock.change}</p>
                    <p><strong>Low:</strong>{stock.low}</p>
                    <p><strong>Last Price:</strong>{stock.lastPrice}</p>
                    <p><strong>Open:</strong>{stock.open}</p>
                </div>
                    )
                
            }
        })
        
    )
}

export default Stock;