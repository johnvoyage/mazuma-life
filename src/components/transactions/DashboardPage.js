import React from 'react'
import { Link } from 'react-router-dom'

import TransactionList from './TransactionList'
import TransactionListFilters from './TransactionListFilters'


const TransactionDashboardPage = () => (
  <div>
    <div className='page-header'>
      <div className='content-container'>
        <h1 className='page-header__title'>Viewing <span>some</span> transactions...</h1>
        <div className='page-header__actions'>
          <Link className='button' to='/create'>Add Transaction</Link>
        </div>
      </div>
    </div>
    <TransactionListFilters />
    <TransactionList />
  </div>
)

export default TransactionDashboardPage