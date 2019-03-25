import React from 'react'
import { connect } from 'react-redux'


const UserPage = (props) => {
  return (
    <div style={{padding: '10%'}}>
      {`Hi ${props.displayName}!`}
      <br />
      {`User email: ${props.email}!`}
      <br />
      {`You have ${props.accounts.length} accounts`}
    </div>
  )
}

const mapStateToProps = (state) => ({
  accounts: state.accounts,
  displayName: state.auth.displayName,
  email: state.auth.email,
})

export default connect(mapStateToProps)(UserPage)