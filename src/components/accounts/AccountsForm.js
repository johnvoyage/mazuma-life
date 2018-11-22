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
      <label>Category</label>
      <input
        name='category'
        onChange={onInputChange} type='text'
        placeholder='category'
        value={fieldInputs.category}
      />
      <br />
      <button
        onClick={handleNewAccount}
      >
        Add
      </button>
    </div>
  )
}

export default AccountsForm
