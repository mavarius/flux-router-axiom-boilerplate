import React from 'react'
import { render } from 'react-dom'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Layout from './components/Layout'
import ParamDependentView from './components/ParamDependentView'

render(
  <Router history={browserHistory}>

    <Route path='/' component={Layout}>
      <IndexRoute component={PrimaryView}></IndexRoute>
      <Route path='/SecondaryData/:aParam' component={SecondaryView}></Route>
    </Route>

  </Router>,
  document.getElementById('root')
);
