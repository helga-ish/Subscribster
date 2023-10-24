import { Link, useLocation } from 'react-router-dom';

function Menu() {

  return(
    <nav>
      <ul>
        <li><Link to='/profile'>Profile</Link></li>
        <li><Link to='/subscriptions'>Subscriptions</Link></li>
      </ul>
      <button>Log out</button>
    </nav>
  )
}

export default Menu;