import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'



const TopNav = () => (
  <div className='nav-bar-container'>
    <div className='nav-bar-link'>
      <Link to='/profile'>Profile</Link>
    </div>
    <div className='nav-bar-link'>
      <Link to='/entries'>Entries</Link>
    </div>
    <div className='nav-bar-link'>
      <Link to='/accounts'>Accounts</Link>
    </div>
    <div className='nav-bar-link'>
      <Link to='/goals'>Goals</Link>
    </div>
    <div className='nav-bar-link'>
      <Link to='/charts'>Charts</Link>
    </div>
    <div className='nav-bar-link'>
      <Link to='/table/amortization'>Amortization Table</Link>
    </div>
  </div>
)



export default connect()(TopNav)