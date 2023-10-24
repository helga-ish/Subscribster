import Menu from '../Menu/Menu';

function Header() {


  return(
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