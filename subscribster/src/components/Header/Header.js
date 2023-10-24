import Menu from '../Menu/Menu';
import React from 'react';

function Header() {

  const isLoggedIn = true;

  return (
    <header>
      <img />
      {isLoggedIn ? (
        <Menu />
      ) : (
        <ul>
          <li><button>Sign in</button></li>
          <li><button>Sign up</button></li>
        </ul>
      )}

    </header>
  )
}

export default Header;