import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    type: "",
    sort: 'no sort'
  }

  componentDidMount() {
    fetch("http://localhost:3000/stocks")
    .then(response => response.json())
    .then(stockData => this.setState({
      stocks: stockData
    }))
  }

  setFilterType = (newFilter) => {
    this.setState({
      type: newFilter
    })
  }

  setSortType = (sortType) => {
    this.setState({
      sort: sortType
    })
  }

  managePortfolio = (stockId) => {
   let targetStock = this.state.stocks.find(stock => stock.id === stockId)

    if (targetStock.inPortfolio) {
      targetStock.inPortfolio = false
    } else {
      targetStock.inPortfolio = true
    }

   this.setState({
     stocks: this.state.stocks
   })
  }


  render() {
    
    return (
      <div>
        <SearchBar
        type={this.state.type}
        setFilterType={this.setFilterType}
        setSortType={this.setSortType}
        />

          <div className="row">
            <div className="col-8">

              <StockContainer
              stocks={this.state.stocks} 
              type={this.state.type}
              sort={this.state.sort}
              managePortfolio={this.managePortfolio}
              />

            </div>
            <div className="col-4">

              <PortfolioContainer
              managePortfolio={this.managePortfolio}
              stocks={this.state.stocks}
              />
            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
