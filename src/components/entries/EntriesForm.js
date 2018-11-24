import React from 'react'


const AccountsForm = (props) => {
  const { fieldInputs, onInputChange, handleNewAccount } = props

  return (
    <div>
      <label>Name</label>
      <input
        name='name'
        onChange={onInputChange}
        placeholder='name'
        value={fieldInputs.name}
      />
      <br />
      <label>Description</label>
      <textarea
        name='description'
        onChange={onInputChange} type='text'
        placeholder='description'
        value={fieldInputs.term}
      />
      <br />
      <label>Accounts</label>
      <input
        name='accounts'
        onChange={onInputChange} type='text'
        placeholder='accounts'
        value={fieldInputs.accounts}
      />
      <br />
      <label>Debit(s)</label>
      <input
        name='debits'
        onChange={onInputChange} type='text'
        placeholder='debits'
        value={fieldInputs.debits}
      />
      <br />
      <label>Credit(s)</label>
      <input
        name='credits'
        onChange={onInputChange} type='text'
        placeholder='credits'
        value={fieldInputs.credits}
      />
      <br />
      <button
        onClick={handleNewAccount}
        disabled={true}
      >
        Add
      </button>
    </div>
  )
}

export default AccountsForm
