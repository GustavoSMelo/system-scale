import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Countries from '../views/countries'
import Home from '../views/home'
import Users from '../views/users'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/users' component={Users} />
        <Route exact path='/countries' component={Countries} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
