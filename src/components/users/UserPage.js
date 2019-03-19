import React from 'react'
import { connect } from 'react-redux'


const UserPage = (props) => {
  return (
    <div style={{padding: '10%'}}>
      {`Hi ${props.displayName}!`}
      {`User email: ${props.email}!`}
    </div>
  )
}

const mapStateToProps = (state) => ({
  email: state.auth.email,
  displayName: state.auth.displayName,
})

export default connect(mapStateToProps)(UserPage)