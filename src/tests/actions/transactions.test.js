import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { addTransaction, editTransaction, removeTransaction, startAddTransaction } from '../../actions/transactions'
import database from '../../firebase/firebase'

const middlewares = [thunk]
const createMockStore = configureMockStore(middlewares)

test('should setup remove transaction action object', () => {
  const action = removeTransaction({ id: '123abc' })
  
  expect(action).toEqual({
    type: 'REMOVE_TRANSACTION',
    id: '123abc',
  })
})

test('should add transaction to database and store', (done) => {
  const store = createMockStore({})
  const transactionData = {
    description: 'Coffee',
    amount: 3000,
    note: 'Bitter coffee',
    createdAt: 1000,
  }

  store.dispatch(startAddTransaction(transactionData)).then(() => {
    const actions = store.getActions()
    
    expect(actions).toHaveLength(1)
    expect(actions[0]).toEqual({
      type: 'ADD_TRANSACTION',
      transaction: {
        id: expect.any(String),
        ...transactionData,
      }
    })

    return database.ref(`transactions/${actions[0].transaction.id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(transactionData)
    done()
  })
})