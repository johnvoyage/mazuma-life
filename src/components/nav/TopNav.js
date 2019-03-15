import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'



const TopNav = () => (
  <div className='nav-bar-container' style={{alignContent: 'justify'}}>
    <Link to='/profile'>Profile</Link>
    <Link to='/entries'>Entries</Link>
    <Link to='/accounts'>Accounts</Link>
    <Link to='/goals'>Goals</Link>
    <Link to='/charts'>Charts</Link>
    <Link to='/table/amortization'>Amortization Table</Link>
  </div>
)



export default connect()(TopNav)