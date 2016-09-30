import React, { Component } from 'react'

import SearchBar from './SearchBar'
import PrimaryList from './PrimaryList'

import PrimaryStore from '../stores/PrimaryStore'
import GetActions from '../actions/GetActions'

export default class PrimaryView extends Component {
  constructor() {
    super();

    this.state = PrimaryStore.getAll()
    this._onChange = this._onChange.bind(this)
  }

  componentWillMount() {
    PrimaryStore.startListening(this._onChange)
  }

  componentDidMount() {
    PrimaryStore.getAll()
  }

  componentWillUnmount() {
    PrimaryStore.stopListening(this._onChange)
  }

  _onChange() {
    this.setState( PrimaryStore.getAll() )
  }

  render() {
    const { primary } = this.state;

    return (
      <div className="row">
        <SearchBar primary={primary}/>
        <PrimaryList primary={primary}/>
      </div>
    )
  }
}
