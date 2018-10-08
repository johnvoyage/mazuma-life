import React from 'react'
import { connect } from 'react-redux'

import TransactionForm from './TransactionForm'
import { editTransaction, removeTransaction } from '../../actions/transactions';

const EditTransactionPage = (props) => {
  console.log(props)
  return (
    <div>
      <TransactionForm 
        transaction={props.transaction}
        onSubmit={(transaction) => {
          console.log(transaction)
          props.dispatch(editTransaction(props.transaction.id, transaction))
          props.history.push('/')
        }}
      />
      <button onClick={() => {
        props.dispatch(removeTransaction({ id: props.transaction.id }))
        props.history.push('/')
      }}>Remove</button>
    </div>
  )
}

const mapStateToProps = (state, props) => {
  return {
    transaction: state.transactions.find((transaction) => transaction.id === props.match.params.id)
  }
}


export default connect(mapStateToProps)(EditTransactionPage)