import React from 'react'

import { firebase } from '../../firebase/firebase'

const UserPage = () => {
  console.log(firebase.auth().email)

  return (
    <div>
      USer page
    </div>
  )
}

export default UserPage