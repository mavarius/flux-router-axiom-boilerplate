import React, { Component } from 'react'
import NavLink from './NavLink'
import { browserHistory } from 'react-router'

export default class PrimaryList extends Component {
  constructor() {
    super()

    // this._selectItem = this._selectItem.bind(this);
  }

  // ALTERNATE METHOD OF PAGE CHANGE
  // _selectItem(aParam) {
  //   browserHistory.push(`/detail/${aParam}`);
  // }

  render() {
    const { primary } = this.props;

    let List = primary.map((item, index) => {
      return <NavLink key={index} to={`/SecondaryView/${item.key}`}</NavLink>
    })

    return (
        <div className="row">
          {primary ?
            <div className="primaryList">
              {List}
            </div>
          : null }
        </div>
    )
  }
}
