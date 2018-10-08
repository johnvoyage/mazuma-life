import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addTransaction } from './actions/transactions'
import { setTextFilter } from './actions/filters'
import getVisibleTransactions from './selectors/transactions'

import 'normalize.css/normalize.css'
import './styles/styles.scss'
import AddTransactionPage from './components/transactions/AddTransactionPage';


const store = configureStore()

// console.log(store.getState())
store.dispatch(addTransaction({ description: 'Water b', amount: 1, createdAt: 10 }))
store.dispatch(addTransaction({ description: 'Gas b', amount: 1, createdAt: 20 }))
store.dispatch(addTransaction({ description: 'r b', amount: 22, createdAt: 30 }))


const state = store.getState()
const visibleTransactions = getVisibleTransactions(state.transactions, state.filters)
console.log(visibleTransactions)

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
