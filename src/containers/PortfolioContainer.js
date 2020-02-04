import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {

    let stockList = this.props.stocks.filter(stock => stock.inPortfolio)

    let stockComponentList = stockList.map(stock => 
        <Stock 
        stockAction={this.props.stockAction}
        {...stock}
        key={stock.id}
        />)

    return (
      <div>
        <h2>My Portfolio</h2>
        <div>
          { stockComponentList }
        </div>
      </div>
    );
  }
}

export default PortfolioContainer;
