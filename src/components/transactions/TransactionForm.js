import React from 'react'

class TransactionForm extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      description: props.transaction ? props.transaction.description : '',
      note: props.transaction ? props.transaction.note : '',
      amount: props.transaction ? (props.transaction.amount / 100).toString() : '',
    }
  }


  onDescriptionChange = (e) => {
    const description = e.target.value
    this.setState(() => ({ description }))
  }

  onNoteChange = (e) => {
    const note = e.target.value
    this.setState(() => ({ note }))
  }

  onAmountChange = (e) => {
    const amount = e.target.value
  if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }))
    }
  }

  onSubmit = (e) => {
    e.preventDefault()

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'please provide desc and amount' }))
    } else {
      this.setState(() => ({ error: '' }))
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        // createdAt: this.state.createdAt
        note: this.state.note,
      })
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input 
            type='text'
            placeholder='description'
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input 
            type='text'
            value={this.state.amount}
            placeholder='amount'
            onChange={this.onAmountChange}
          />
          <textarea 
            placeholder='Add a note for your transaction'
            value={this.state.note}
            onChange={this.onNoteChange}
          />
          <button>
            Add Transaction
          </button>
        </form>
      </div>
    )
  }
}

export default TransactionForm