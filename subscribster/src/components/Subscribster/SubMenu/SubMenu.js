import { Link, useLocation } from 'react-router-dom';
import './SubMenu.css';
import React from 'react';

function SubMenu() {

  const [isActive, setIsActive] = React.useState(false);
    function handleActiveState() {
        setIsActive(true);
    }
    function handleInactiveState() {
        setIsActive(false);
    }
  const profileLinkClassname = `subheader__link ${isActive ? 'subheader__link_active' : ''}`;
  const subscrLinkClassname = `subheader__link ${isActive ? 'subheader__link_active' : ''}`;
  const randomLinkClassname = `subheader__link ${isActive ? 'subheader__link_active' : ''}`;



  return(
    <nav className='subheader__navigation'>
      <ul className='subheader__list'>
        <li><Link className={profileLinkClassname} onClick={!isActive ? handleActiveState : handleInactiveState} to='/profile'>Profile</Link></li>
        <li><Link className={subscrLinkClassname} onClick={!isActive ? handleActiveState : handleInactiveState} to='/subscriptions'>My subscriptions</Link></li>
        <li><Link className={randomLinkClassname} onClick={!isActive ? handleActiveState : handleInactiveState} to='/randomizer'>My Randomizer</Link></li>
      </ul>
      <button className='subheader__logout'>Log out</button>
    </nav>
  )
}

export default SubMenu;