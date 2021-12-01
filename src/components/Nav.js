import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Nav.css';

function Nav() {
  // t is a internationalization variable
  const { t } = useTranslation();
  // creating a states to be used in react components
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  // handlers to be used in handling clicks and nav
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navBar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            CoinTracker
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                {t('nav.home')}
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/portfolio' className='nav-links' onClick={closeMobileMenu}>
                {t('nav.portfolio')}
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/news' className='nav-links' onClick={closeMobileMenu}>
                {t('nav.news')}
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/weather' className='nav-links' onClick={closeMobileMenu}>
                {t('nav.weather')}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
