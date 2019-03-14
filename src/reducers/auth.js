const authReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        uid: action.uid,
        email: action.email,
        displayName: action.displayName,
      }
    case 'LOGOUT':
      return {}
    default: 
      return state
  }
}

export default authReducer