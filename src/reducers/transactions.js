const transactionsReducerDefaultState = []
const ADD_TRANSACTION = 'ADD_TRANSACTION'
const EDIT_TRANSACTION = 'EDIT_TRANSACTION'
const REMOVE_TRANSACTION = 'REMOVE_TRANSACTION'
const SET_TRANSACTIONS = 'SET_TRANSACTIONS'

const transactionsReducer = (state = transactionsReducerDefaultState, action) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return [
        ...state,
        action.transaction,
      ]
    case REMOVE_TRANSACTION:
      return state.filter(({ id }) => id !== action.id)
    case EDIT_TRANSACTION:
    return state.map((transaction) => {
      if (transaction.id === action.id) {
          return {
            ...transaction,
            ...action.updates
          }
        } else {
          return transaction
        }
      })
    case SET_TRANSACTIONS:
      return action.transactions;
    default: 
      return state
  }
}

export default transactionsReducer