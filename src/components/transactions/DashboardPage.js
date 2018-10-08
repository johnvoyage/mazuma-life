import React from 'react'
import TransactionList from './TransactionList'
import TransactionListFilters from './TransactionListFilters'

const TransactionDashboardPage = () => (
  <div>
    <TransactionListFilters />
    <TransactionList />
  </div>
)

export default TransactionDashboardPage