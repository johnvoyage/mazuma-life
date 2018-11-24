const entriesReducerDefaultState = []
const ADD_ENTRY = 'ADD_ENTRY'
const EDIT_ENTRY = 'EDIT_ENTRY'
const REMOVE_ENTRY = 'REMOVE_ENTRY'
const SET_ENTRIES = 'SET_ENTRIES'

const entriesReducer = (state = entriesReducerDefaultState, action) => {
  switch (action.type) {
    case ADD_ENTRY:
      return [
        ...state,
        action.entry,
      ]
    case REMOVE_ENTRY:
      return state.filter(({ id }) => id !== action.id)
    case EDIT_ENTRY:
    return state.map((entry) => {
      if (entry.id === action.id) {
          return {
            ...entry,
            ...action.updates
          }
        } else {
          return entry
        }
      })
    case SET_ENTRIES:
      return action.entries;
    default:
      return state
  }
}

export default entriesReducer
