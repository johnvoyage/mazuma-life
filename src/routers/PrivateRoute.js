import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

import Header from '../components/nav/Header'
import TopNav from '../components/nav/TopNav'



const PrivateRoute = ({ 
  isAuthenticated, 
  component: Component,
  ...rest, 
}) => (
  <Route {...rest} component={(props) => (
    isAuthenticated ? (
      <div>
        <Header />
        <TopNav />
        <Component {...props}/>
      </div>
    ) : (
      <Redirect to="/" />
    )
  )}/>
)

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PrivateRoute)