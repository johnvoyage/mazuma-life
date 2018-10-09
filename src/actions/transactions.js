import uuid from 'uuid'
import database from '../firebase/firebase'


export const startAddTransaction = (transactionData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = transactionData
    const transaction = { description, note, amount, createdAt }

    return database.ref('transactions').push(transaction).then((ref) => {
      dispatch(addTransaction({
        id: ref.key,
        ...transaction,
      }))
    })
  }
}

export const addTransaction = (transaction) => ({
  type: 'ADD_TRANSACTION',
  transaction,
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