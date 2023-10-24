import Menu from '../Menu/Menu';
import React from 'react';
import './Header.css';

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
              <li className='header__link'><button className='header__button-signin'>Sign in</button></li>
              <li className='header__link'><button className='header__button-signup'>Sign up</button></li>
            </ul>
          </nav>

        )}

      </div>

    </header>
  )
}

export default Header;