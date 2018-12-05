import React from 'react'


class EntriesForm extends React.Component {
  constructor(props) {
    super(props)

    this.onInputChange = this.onInputChange.bind(this)
    this.handleNewEntry = this.handleNewEntry.bind(this)

    this.state = {
      category: '',
      description: '',
      name: '',
    }
  }

  onInputChange(event) {
    // console.log(event.target.name)
    const inputField = event.target.name
    const inputValue = event.target.value
    this.setState(() => ({
      [inputField]: inputValue
    }))
  }

  handleNewEntry(event) {
    const fieldInputs = { ...this.state }
    this.props.startAddEntry(fieldInputs)
    this.setState(() => ({
      category: '',
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
          <div style={{background: 'white', padding: '2%', display: 'inline-block'}}>
            <label>Accounts</label>
            <input
              name='accounts'
              onChange={this.onInputChange} type='text'
              placeholder='accounts'
              value={fieldInputs.accounts}
            />
            <label>Debit(s)</label>
            <input
              name='debits'
              onChange={this.onInputChange} type='text'
              placeholder='debits'
              value={fieldInputs.debits}
            />
            <button name='debit-button'>Add</button>
          </div>
          <div style={{background: 'grey', padding: '2%', display: 'inline-block'}}>
            <label>Accounts</label>
            <input
              name='accounts'
              onChange={this.onInputChange} type='text'
              placeholder='accounts'
              value={fieldInputs.accounts}
            />
            <label>Credit(s)</label>
            <input
              name='credits'
              onChange={this.onInputChange} type='text'
              placeholder='credits'
              value={fieldInputs.credits}
            />
            <button name='credit-button'>Add</button>
          </div>
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
