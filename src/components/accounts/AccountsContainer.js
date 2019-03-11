import React from 'react'
import { connect } from 'react-redux'

import AccountsTable from './AccountsTable';
import AccountsForm from './AccountsForm'
import { startAddAccount } from '../../actions/accounts'


class AccountsContainer extends React.Component {
  constructor(props) {
    super(props)

    this.onInputChange = this.onInputChange.bind(this)
    this.handleNewAccount = this.handleNewAccount.bind(this)

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

  handleNewAccount(event) {
    const fieldInputs = { ...this.state }
    this.props.startAddAccount(fieldInputs)
    this.setState(() => ({
      category: '',
      description: '',
      name: '',      
    }))
  }

  render() {
    return (
      <div>
        <AccountsForm
          fieldInputs={this.state}
          onInputChange={this.onInputChange}
          handleNewAccount={this.handleNewAccount}
        />
        <div style={{padding: '5%'}}>
          <AccountsTable
            // fieldInputs={this.state}
          />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddAccount: (account) => dispatch(startAddAccount(account))
})

export default connect(undefined, mapDispatchToProps)(AccountsContainer)
