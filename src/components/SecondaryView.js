import React, { Component } from 'react'

import getActions from '../actions/getActions'

import SecondaryStore from '../stores/SecondaryStore'

import NavLink from './NavLink'

export default class SecondaryView extends Component {
  constructor() {
    super();

    this.state = SecondaryStore.getAll()
    this._onChange = this._onChange.bind(this)
  }

  componentWillMount() {
    SecondaryStore.startListening(this._onChange)
  }

  componentDidMount() {
    getActions.fetchDetails(this.props.params.aParam)
    SecondaryStore.getAll()
  }

  componentWillUnmount() {
    SecondaryStore.stopListening(this._onChange)
  }

  _onChange() {
    this.setState( SecondaryStore.getAll() )
  }

  render() {
    const { key } = this.state.secondary;

    return (
      <div className="row secondaryView">
        <NavLink className='btn navBtn' to="/" onlyActiveOnIndex>back to index</NavLink>

        {secondary ?
          <div className="secondary">

          </div>
        : <span className="loadingMessage">fetching secondary data...</span>}
      </div>
    )
  }
}
