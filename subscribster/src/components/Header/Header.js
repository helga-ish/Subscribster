import Menu from '../Menu/Menu';
import React from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';

function Header() {

  const isLoggedIn = true;

  return (
    <header className='header'>
      <div className='header__container'>
        <img className='logo' alt='subscribster logo' />
        <h1 className='heading'>Subscribster</h1>
        {isLoggedIn ? (
          <Menu />
        ) : (
          <nav className='header__navigation'>
            <ul className='header__list'>
              <li className='header__link'><Link className='header__button-signin' to='/signin'>Sign in</Link></li>
              <li className='header__link'><Link className='header__button-signup' to='/signup'>Sign up</Link></li>
            </ul>
          </nav>

        )}

      </div>

    </header>
  )
}

export default Header;