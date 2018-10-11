import React from 'react'
import { connect } from 'react-redux'

import TransactionListItem from './TransactionListItem'
import selectTransactions from '../../selectors/transactions'

const TransactionList = (props) => (
  <div>
    <div className='content-container'>
      <div className='list-header'>
        <div className='show-for-mobile'>Expenses</div>
        <div className='show-for-desktop'>Expense</div>
        <div className='show-for-desktop'>Amount</div>
      </div>
      <div className='list-body'>
        {
          props.transactions.length === 0 ? (
            <div>
              <span className='list-item list-item--message'>None</span>
            </div>
          ) : (
            props.transactions.map((transaction) => {
              return <TransactionListItem key={transaction.id} {...transaction} />
            })
          )
        }
      </div>
    </div>
  </div>
)

const mapStateToProps = (state) => {
  return {
    transactions: selectTransactions(state.transactions, state.filters)
  }
}

export default connect(mapStateToProps)(TransactionList)