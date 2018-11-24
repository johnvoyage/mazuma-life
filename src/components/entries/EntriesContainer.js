import React from 'react'
import { connect } from 'react-redux'

import EntriesTable from './EntriesTable';
import EntriesForm from './EntriesForm'
import { startAddEntry } from '../../actions/accounts'


class EntriesContainer extends React.Component {
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
    return (
      <div>
        <EntriesForm
          fieldInputs={this.state}
          onInputChange={this.onInputChange}
          handleNewEntry={this.handleNewEntry}
        />
        <EntriesTable
          // fieldInputs={this.state}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddEntry: (account) => dispatch(startAddEntry(account))
})

export default connect(undefined, mapDispatchToProps)(EntriesContainer)
