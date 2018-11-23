import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

import TransactionDashboardPage from '../components/transactions/DashboardPage'
import AddTransactionPage from '../components/transactions/AddTransactionPage'
import EditTransactionPage from '../components/transactions/EditTransactionPage'

import AmortizationTableContainer from '../components/amortization/AmortizationTableContainer'
import AccountsContainer from '../components/accounts/AccountsContainer'
import NotFoundPage from '../components/misc/NotFoundPage'
import LoginPage from '../components/auth/LoginPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import UserPage from '../components/users/UserPage'
import EntriesContainer from '../components/entries/EntriesContainer'


export const history = createHistory()

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path='/' component={LoginPage} exact={true} />

        <PrivateRoute path='/transactions' component={TransactionDashboardPage} />
        <PrivateRoute path='/create' component={AddTransactionPage} />
        <PrivateRoute path='/edit/:id' component={EditTransactionPage} />

        <PrivateRoute path='/accounts' component={AccountsContainer} />
        <PrivateRoute path='/entries' component={EntriesContainer} />
        <PrivateRoute path='/profile' component={UserPage} />
        <PrivateRoute path='/chart' component={NotFoundPage} />
        <PrivateRoute path='/table/amortization' component={AmortizationTableContainer} />
        <PrivateRoute path='/goals' component={NotFoundPage} />

        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter
