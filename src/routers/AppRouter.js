import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

import TransactionDashboardPage from '../components/transactions/DashboardPage'
import AddTransactionPage from '../components/transactions/AddTransactionPage'
import EditTransactionPage from '../components/transactions/EditTransactionPage'
import NotFoundPage from '../components/misc/NotFoundPage'
import LoginPage from '../components/auth/LoginPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'


export const history = createHistory()

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path='/' component={LoginPage} exact={true} />
        <PrivateRoute path='/transactions' component={TransactionDashboardPage} />
        <PrivateRoute path='/create' component={AddTransactionPage} />
        <PrivateRoute path='/edit/:id' component={EditTransactionPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter