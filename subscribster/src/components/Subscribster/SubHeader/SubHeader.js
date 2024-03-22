import SubMenu from '../SubMenu/SubMenu';
import React from 'react';
import logo from '../../../images/logo.png';
import './SubHeader.css';
import { Link, useLocation } from 'react-router-dom';

function SubHeader() {

  const isLoggedIn = true;

  return (
    <header className='subheader'>
      <div className='subheader__container'>
        <img className='logo' src={logo} alt='subscribster logo' />
        <h1 className='subheading'>Subscribster</h1>
        {isLoggedIn ? (
          <SubMenu />
        ) : (
          <nav className='subheader__navigation'>
            <ul className='subheader__list'>
              <li className='subheader__link'><Link className='subheader__button-signin' to='/signin'>Sign in</Link></li>
              <li className='subheader__link'><Link className='subheader__button-signup' to='/signup'>Sign up</Link></li>
            </ul>
          </nav>

        )}

      </div>

    </header>
  )
}

export default SubHeader;