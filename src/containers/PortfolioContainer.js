import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {

    let stockList = this.props.stocks.filter(stock => stock.inPortfolio)

    let stockComponentList = stockList.map(stock => 
        <Stock 
        managePortfolio={this.props.managePortfolio}
        {...stock}
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
