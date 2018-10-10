import React from 'react'
import { connect } from 'react-redux'

import TransactionForm from './TransactionForm'
import { editTransaction, startRemoveTransaction } from '../../actions/transactions';

class EditTransactionPage extends React.Component {
  onSubmit = (transaction) => {
    this.props.editTransaction(this.props.transaction.id, transaction)
    this.props.history.push('/')
  }
  onRemove = () => {
    this.props.startRemoveTransaction({ id: this.props.transaction.id })
    this.props.history.push('/')
  }
  render() {
    return (
      <div>
        <TransactionForm 
          transaction={this.props.transaction}
          onSubmit={this.onSubmit}
        />
        <button onClick={this.onRemove}>Remove</button>
      </div>
    )
  } 
}

const mapStateToProps = (state, props) => ({
  transaction: state.transactions.find((transaction) => transaction.id === props.match.params.id)
})

const mapDispatchToProps = (dispatch, props) => ({
  editTransaction: (id, transaction) => dispatch(editTransaction(id, transaction)),
  startRemoveTransaction: (data) => dispatch(startRemoveTransaction(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditTransactionPage)