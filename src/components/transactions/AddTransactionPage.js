import React from 'react'
import { connect } from 'react-redux'

import TransactionForm from './TransactionForm'
import { addTransaction } from '../../actions/transactions'

const AddTransactionPage = (props) => (
  <div>
    <TransactionForm
      onSubmit={(transaction) => {
        props.dispatch(addTransaction(transaction))
        props.history.push('/')
      }}
    />
  </div>
)

export default connect()(AddTransactionPage)