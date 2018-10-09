import React from 'react'
import { connect } from 'react-redux'

import TransactionForm from './TransactionForm'
import { startAddTransaction } from '../../actions/transactions'

class AddTransactionPage extends React.Component {
  
  onSubmit = (transaction) => {
    this.props.startAddTransaction(transaction)
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <TransactionForm onSubmit={this.onSubmit}/>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddTransaction: (transaction) => dispatch(startAddTransaction(transaction))
})

export default connect(undefined, mapDispatchToProps)(AddTransactionPage)