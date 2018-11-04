import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import AppRouter, { history } from './routers/AppRouter'
import configureStore from './store/configureStore'
import { startSetTransactions } from './actions/transactions'
import { login, logout } from './actions/auth'
import { firebase } from './firebase/firebase'
import LoadingPage from './components/async/LoadingPage'

import 'normalize.css/normalize.css'
import './styles/styles.scss'
import "react-table/react-table.css"

const store = configureStore()

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

let hasRendered = false 
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'))
    hasRendered = true
  }
}

ReactDOM.render(<LoadingPage />, document.getElementById('app'))

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid))
    store.dispatch(startSetTransactions()).then(() => {
      renderApp()
      if (history.location.pathname === '/') {
        history.push('/profile')
      }
    })
  } else {
    store.dispatch(logout())
    renderApp()
    history.push('/')
  }
})