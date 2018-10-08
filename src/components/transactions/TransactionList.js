import React from 'react'
import { connect } from 'react-redux'

import TransactionListItem from './TransactionListItem'
import selectTransactions from '../../selectors/transactions'

const TransactionList = (props) => (
  <div>
    <h1>Transaction list</h1>
    {props.transactions.map((transaction) => {
      return <TransactionListItem key={transaction.id} {...transaction} />
    })}
  </div>
)

const mapStateToProps = (state) => {
  return {
    transactions: selectTransactions(state.transactions, state.filters)
  }
}

export default connect(mapStateToProps)(TransactionList)