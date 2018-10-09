import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'

import transactionsReducer from "../reducers/transactions";
import filtersReducer from "../reducers/filters";

const composeEnhancers = window.__REDUX_DEVTOOL_EXTENSION_COMPOSE__ || compose

export default () => {
  const store = createStore(
    combineReducers({
      transactions: transactionsReducer,
      filters: filtersReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  )

  return store
}

