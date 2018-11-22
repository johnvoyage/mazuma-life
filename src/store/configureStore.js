import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import transactionsReducer from '../reducers/transactions'
import filtersReducer from '../reducers/filters'
import authReducer from '../reducers/auth'
import accountsReducer from '../reducers/accounts'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
  const store = createStore(
    combineReducers({
      accounts: accountsReducer,
      auth: authReducer,
      transactions: transactionsReducer,
      filters: filtersReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  )

  return store
}
