import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { startLogout } from '../../actions/auth'


const Header = ({ startLogout }) => (
  <header className='header'>
    <div className='content-container'>
      <div className='header__content'>
        <Link className='header__title' to='/profile'>
          <h1>Mazuma</h1>
        </Link>
        <Link className='header__title' to='/entries/new'>
          <h1>Quick Entry</h1>
        </Link>
        <button className='button button--link' onClick={startLogout}>Logout</button>
      </div>
    </div>
  </header>
)

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header)
