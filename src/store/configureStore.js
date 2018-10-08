import { createStore, combineReducers } from "../../node_modules/redux";
import transactionsReducer from "../reducers/transactions";
import filtersReducer from "../reducers/filters";

export default () => {
  const store = createStore(
    combineReducers({
      transactions: transactionsReducer,
      filters: filtersReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  return store
}

