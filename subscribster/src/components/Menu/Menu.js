import { Link, useLocation } from 'react-router-dom';
import './Menu.css';
import React from 'react';

function Menu() {

  const [isActive, setIsActive] = React.useState(false);
    function handleActiveState() {
        setIsActive(true);
    }
    function handleInactiveState() {
        setIsActive(false);
    }
  const subscrLinkClassname = `header__link ${isActive ? 'header__link_active' : ''}`;
  const randomLinkClassname = `header__link ${isActive ? 'header__link_active' : ''}`;



  return(
    <nav className='header__navigation'>
      <ul className='header__list'>
        <li><Link className={subscrLinkClassname} onClick={!isActive ? handleActiveState : handleInactiveState} to='/landing'>About Me</Link></li>
        <li><Link className={subscrLinkClassname} onClick={!isActive ? handleActiveState : handleInactiveState} to='/subscribster'>Subscribster</Link></li>
        <li><Link className={randomLinkClassname} onClick={!isActive ? handleActiveState : handleInactiveState} to='/randomizer'>My Randomizer</Link></li>
      </ul>
    </nav>
  )
}

export default Menu;