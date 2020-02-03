import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    
    let stocksList = [...this.props.stocks]
    
    if (this.props.type) {
      stocksList = stocksList.filter(stock => stock.type === this.props.type)
    }

    if (this.props.sort === "Alphabetically") {
      stocksList.sort((a,b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)
    }

    if (this.props.sort === "Price") {
      stocksList.sort((a,b) => a.price - b.price)
    }

    let stocksComponentList = stocksList.map(stock => 
      <Stock 
      key={stock.id}
      managePortfolio={this.props.managePortfolio}
      {...stock} />)

    
    

    return (
      <div>
        <h2>Stocks</h2>
        {stocksComponentList}
      </div>
    );
  }

}

export default StockContainer;
