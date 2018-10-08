import uuid from 'uuid'

export const addTransaction = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_TRANSACTION',
  transaction: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  }
})

export const removeTransaction = ({ id } = {}) => ({
  type: 'REMOVE_TRANSACTION',
  id
})

export const editTransaction = (id, updates) => ({
  type: 'EDIT_TRANSACTION',
  id,
  updates,
})