import React, { Component } from 'react'

import StockActions from '../actions/StockActions'

export default class SearchBar extends Component {
  constructor () {
    super()

    this.handleSearch = this.handleSearch.bind(this);
    this.clearSearchBar = this.clearSearchBar.bind(this);
  }

  clearSearchBar(e) {
    const { searchInput } = this.refs;

    searchInput.value = ''
  }

  handleSearch(e) {
    e.preventDefault()
    const { searchInput } = this.refs;

    let variable = searchInput.value;

    StockActions.fetchSymbol(variable);
  }

  render( ) {
    return (
      <div className="row searchBlock">
        <form onSubmit={this.handleSearch}>
          <input onFocus={this.clearSearchBar} type="text" className="searchBar" ref="searchInput" placeholder="enter search term"/>
          <button className="btn searchBtn">search</button>
        </form>
      </div>
    )
  }
}
