import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import TransactionDashboardPage from '../components/transactions/DashboardPage'
import AddTransactionPage from '../components/transactions/AddTransactionPage'
import EditTransactionPage from '../components/transactions/EditTransactionPage'
import HelpPage from '../components/misc/HelpPage'
import NotFoundPage from '../components/misc/NotFoundPage'
import Header from '../components/nav/Header'


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path='/' component={TransactionDashboardPage} exact={true} />
        <Route path='/create' component={AddTransactionPage} />
        <Route path='/edit/:id' component={EditTransactionPage} />
        <Route path='/help' component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter