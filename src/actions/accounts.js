import uuid from 'uuid'
import database from '../firebase/firebase'

const ADD_ACCOUNT = 'ADD_ACCOUNT'

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
  type: ADD_ACCOUNT,
  account,
})

export const startRemoveAccount = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/accounts/${id}`).remove().then(() => {
      console.log(id)
      dispatch(removeAccount({ id }))
    })
  }
}

export const removeAccount = ({ id } = {}) => ({
  type: 'REMOVE_ACCOUNT',
  id
})

export const editAccount = (id, updates) => ({
  type: 'EDIT_ACCOUNT',
  id,
  updates,
})

export const startEditAccount = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/accounts/${id}`).update(updates).then(() => {
      dispatch(editAccount(id, updates))
    })
  }
}

export const startSetAccounts = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/accounts`).once('value').then((snapshot) => {
      const accounts = []

      snapshot.forEach((childSnapshot) => {
        accounts.push({
          id: childSnapshot.key,
          ...childSnapshot.val(),
        })
      })

      dispatch(setAccounts(accounts))
    })
  }
}

export const setAccounts = (accounts) => ({
  type: 'SET_ACCOUNTS',
  accounts
})
