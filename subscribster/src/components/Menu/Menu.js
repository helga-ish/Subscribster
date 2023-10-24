import { Link, useLocation } from 'react-router-dom';
import './Menu.css';

function Menu() {

  return(
    <nav className='header__navigation'>
      <ul className='header__list'>
        <li><Link className='header__link' to='/profile'>Profile</Link></li>
        <li><Link className='header__link' to='/subscriptions'>Subscriptions</Link></li>
      </ul>
      <button className='header__logout'>Log out</button>
    </nav>
  )
}

export default Menu;