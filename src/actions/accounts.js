import uuid from 'uuid'
import database from '../firebase/firebase'

const ADD_TRANSACTION = 'ADD_TRANSACTION'

export const startAddAccount = (accountData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    const {
      category = '',
      createdAt = 0,
      description = '',
      name = '',
    } = accountData
    const account = { category, createdAt, description, name }

    return database.ref(`users/${uid}/accounts`).push(account).then((ref) => {
      dispatch(addAccount({
        id: ref.key,
        ...account,
      }))
    })
  }
}

export const addAccount = (account) => ({
  type: ADD_TRANSACTION,
  account,
})
