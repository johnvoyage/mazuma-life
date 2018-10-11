import React from 'react'
import { connect } from 'react-redux'

import TransactionForm from './TransactionForm'
import { startEditTransaction, startRemoveTransaction } from '../../actions/transactions';

class EditTransactionPage extends React.Component {
  onSubmit = (transaction) => {
    this.props.startEditTransaction(this.props.transaction.id, transaction)
    this.props.history.push('/')
  }
  onRemove = () => {
    this.props.startRemoveTransaction({ id: this.props.transaction.id })
    this.props.history.push('/')
  }
  render() {
    return (
      <div>
        <div className='page-header'>
          <div className='content-container'>
            <h1 className='page-header__title'>Edit Transaction</h1>
          </div>
        </div>
        <div className='content-container'>
          <TransactionForm 
            transaction={this.props.transaction}
            onSubmit={this.onSubmit}
          />
          <button className='button button--secondary' onClick={this.onRemove}>Remove</button>
        </div>
      </div>
    )
  } 
}

const mapStateToProps = (state, props) => ({
  transaction: state.transactions.find((transaction) => transaction.id === props.match.params.id)
})

const mapDispatchToProps = (dispatch, props) => ({
  startEditTransaction: (id, transaction) => dispatch(startEditTransaction(id, transaction)),
  startRemoveTransaction: (data) => dispatch(startRemoveTransaction(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditTransactionPage)