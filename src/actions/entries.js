import uuid from 'uuid'
import database from '../firebase/firebase'

const ADD_ENTRY = 'ADD_ENTRY'

export const startAddEntry = (entryData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    const {
      category = '',
      createdAt = 0,
      description = '',
      name = '',
    } = entryData
    const entry = { category, createdAt, description, name }

    return database.ref(`users/${uid}/entries`).push(entry).then((ref) => {
      dispatch(addEntry({
        id: ref.key,
        ...entry,
      }))
    })
  }
}

export const addEntry = (entry) => ({
  type: ADD_ENTRY,
  entry,
})

export const startRemoveEntry = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/entries/${id}`).remove().then(() => {
      console.log(id)
      dispatch(removeEntry({ id }))
    })
  }
}

export const removeEntry = ({ id } = {}) => ({
  type: 'REMOVE_ENTRY',
  id
})

export const editEntry = (id, updates) => ({
  type: 'EDIT_ENTRY',
  id,
  updates,
})

export const startEditEntry = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/entries/${id}`).update(updates).then(() => {
      dispatch(editEntry(id, updates))
    })
  }
}

export const startSetEntries = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/entries`).once('value').then((snapshot) => {
      const entries = []

      snapshot.forEach((childSnapshot) => {
        entries.push({
          id: childSnapshot.key,
          ...childSnapshot.val(),
        })
      })

      dispatch(setEntries(entries))
    })
  }
}

export const setEntries = (entries) => ({
  type: 'SET_ENTRIES',
  entries
})
