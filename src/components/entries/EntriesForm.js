import React from 'react'


class EntriesForm extends React.Component {
  constructor(props) {
    super(props)

    this.onInputChange = this.onInputChange.bind(this)
    this.onEntryInputChange = this.onEntryInputChange.bind(this)
    this.handleNewEntry = this.handleNewEntry.bind(this)
    this.handleNewAccount = this.handleNewAccount.bind(this)
    this.renderFields = this.renderFields.bind(this)

    this.state = {
      debitFields: [{ account: 'Account', amount: 0 }],
      creditFields: [{ account: 'Account', amount: 0 }],
      description: '',
      name: '',
    }
  }

  renderFields(debitOrCredit) {
    const fieldInputs = { ...this.state }
    const fields = fieldInputs[debitOrCredit]

    return fields.map((field, idx) => {
      return (
        <div
          key={idx}
          style={{background: 'grey', padding: '2%', display: 'inline-block'}}
        >
          <label>Accounts</label>
          <input
            name='account'
            onChange={this.onEntryInputChange}
            type='selection'
            placeholder='account'
            value={field.account}
          />
          <label>Debit(s)</label>
          <input
            name='amount'
            onChange={this.onEntryInputChange}
            type='text'
            placeholder='amount'
            value={field.amount}
          />
          <button
            onClick={(event) => this.handleNewAccount(debitOrCredit)}
          >
            +
          </button>
          { fields.length > 1 && (
            <button
            onClick={(event) => this.handleRemoveAccount(debitOrCredit, field.account)}
            >
            -
            </button>
          )}
        </div>
      )
    })
  }

  onEntryInputChange(event) {
    console.log('Here`')
  }

  onInputChange(event) {
    // console.log(event.target.name)
    const inputField = event.target.name
    const inputValue = event.target.value
    this.setState(() => ({
      [inputField]: inputValue
    }))
  }

  handleNewAccount(accountType) {
    this.setState({
      [accountType]: [ ...this.state[accountType], {} ]
    })
  }

  handleRemoveAccount(debitOrCredit, account) {
    this.setState({
      [accountType]: this.state[accountType].filter(a => a.account !== account)
    })
  }

  handleNewEntry(event) {
    const fieldInputs = { ...this.state }
    this.props.startAddEntry(fieldInputs)
    this.setState(() => ({
      // category: '',
      description: '',
      name: '',
    }))
  }

  render() {
    const fieldInputs = { ...this.state }
    return (
      <div style={{padding: '5%'}}>
        <label>Name</label>
        <input
          name='name'
          onChange={this.onInputChange}
          placeholder='name'
          value={fieldInputs.name}
        />
        <br />
        <label>Description</label>
        <textarea
        name='description'
          onChange={this.onInputChange} type='text'
          placeholder='description'
          value={fieldInputs.term}
        />
        <br />
        <div style={{background: 'black', padding: '2%'}}>
          {this.renderFields('debitFields')}
          {this.renderFields('creditFields')}
          <br />
          <button
            onClick={this.handleNewAccount}
            disabled={true}
          >
          Add
          </button>
          </div>
        </div>
    )
  }
}

export default EntriesForm
