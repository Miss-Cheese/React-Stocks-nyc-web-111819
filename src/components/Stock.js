import React from 'react'

const Stock = (props) => (

  <div>
    <div onClick={() => props.managePortfolio(props.id)} className="card">
      <div className="card-body">
        <h5 className="card-title">{
            props.name
          }</h5>
        <p className="card-text">{
          `${props.ticker}: ${props.price}`
          }</p>
      </div>
    </div>
  </div>
);

export default Stock
