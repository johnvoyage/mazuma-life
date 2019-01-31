import React from 'react'
import { connect } from 'react-redux'

class EntriesForm extends React.Component {
  // constructor(props) {
  //   super(props)

    // this.onInputChange = this.onInputChange.bind(this)
    // this.onEntryInputChange = this.onEntryInputChange.bind(this)
    // this.handleNewEntry = this.handleNewEntry.bind(this)
    // this.handleNewAccount = this.handleNewAccount.bind(this)
    // this.renderFields = this.renderFields.bind(this)
    // this.renderAddButton = this.renderAddButton.bind(this)

    // this.
    state = {
      debitFields: [{  }],
      creditFields: [{  }],
      description: '',
      name: '',
    }
  // }

  renderFields(debitOrCreditFields) {
    const { accounts } = this.props
    const fields = this.state[debitOrCreditFields]
    const isDebit = debitOrCreditFields === 'debitFields'

    const selectedAccounts = [
      ...this.state.debitFields.map(f => f.account),
      ...this.state.creditFields.map(f => f.account),
    ]

    return fields.map((field, idx) => {
      return (
        <div
          key={idx}
          style={{
            background: isDebit ? 'white' : 'grey',
            float: isDebit ? 'left' : 'right',
            display: 'inline-block',
            padding: '2%',
          }}
        >
          <label>Accounts</label>
          <select
            name='account'
            onChange={(event) => this.onEntryInputChange(event, debitOrCreditFields, idx)}
            value={field.account || 'Select an Account'}
          >
            <option key='n/a' value=''>Select One</option>
            {accounts.map(a => (
              <option
                key={a.id}
                value={a.name}
                disabled={selectedAccounts.includes(a.name)}
              >{a.name}</option>
            ))}
          </select>
          <label>Debit(s)</label>
          <input
            name='amount'
            onChange={(event) => this.onEntryInputChange(event, debitOrCreditFields, idx)}
            type='text'
            placeholder='amount'
            value={field.amount}
          />
          { idx === fields.length - 1 &&
            <button
              onClick={(event) => this.handleNewAccount(debitOrCreditFields)}
            >
              +
            </button>
          }
          { fields.length > 1 &&
            <button
              onClick={(event) => this.handleRemoveAccount(debitOrCreditFields, idx)}
            >
              -
            </button>
          }
        </div>
      )
    })
  }

  renderAddButton() {
    // const fields = this.state[debitOrCreditFields]
    // const isDebit = debitOrCreditFields === 'debitFields'

    return (
      <button
        // onClick={this.handleNewAccount}
        disabled={true}
      >
        Add
      </button>
    )
  }


  onEntryInputChange(event, debitOrCreditFields, idx) {
    const { name, value } = event.target
    const updatedFields = [ ...this.state[debitOrCreditFields] ]
    updatedFields[idx][name] = value
    this.setState({
      [debitOrCreditFields]: updatedFields
    })
  }

  onInputChange(event) {
    // console.log(event.target.name)
    const inputField = event.target.name
    const inputValue = event.target.value
    this.setState({
      [inputField]: inputValue
    })
  }

  handleNewAccount(debitOrCreditFields) {
    this.setState({
      [debitOrCreditFields]: [ ...this.state[debitOrCreditFields], {} ]
    })
  }

  handleRemoveAccount(debitOrCredit, idx) {
    this.setState({
      [debitOrCredit]: this.state[debitOrCredit].filter((a, i) => i !== idx)
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
        <div style={{background: 'black', padding: '2%', overflow: 'hidden'}}>
          <div style={{float: 'left', width: '45%'}}>
            {this.renderFields('debitFields')}
          </div>
          <div style={{float: 'right', width: '45%'}}>
            {this.renderFields('creditFields')}
          </div>
          <br />
          {this.renderAddButton()}
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  accounts: state.accounts
})

const mapDispatchToProps = (dispatch) => ({
  // startAddAccount: (account) => dispatch(startAddAccount(account))
})

export default connect(mapStateToProps, mapDispatchToProps)(EntriesForm)
