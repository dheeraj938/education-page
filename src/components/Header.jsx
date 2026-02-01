import React from 'react';
import './Header.css';
import nieLogo from '../assets/nie-logo.png';
import foundationLogo from '../assets/foundation-logo.png';

const Header = () => {
  return (
    <header className='header-container'>
      <div className='top-bar'>
        <div className='logos'>
          <div className='logo nie-logo'>
            <img src={nieLogo} alt='NIE Logo' />
            <span className='logo-text-small'>
              National Institute of Education
            </span>
          </div>
          <div className='logo foundation-logo'>
            <img src={foundationLogo} alt='Foundation Logo' />
            <div className='foundation-text'>
              <span className='foundation-name'>
                MAA SUMITRA DEVI EDUCATIONAL FOUNDATION
              </span>
              <span className='foundation-details'>
                ISO CERTIFIED 9001:2015 | MSME REGD | GOVT. OF NCT OF DELHI
              </span>
            </div>
          </div>
        </div>
      </div>
      <nav className='navbar'>
        <div className='nav-line-indicator'></div>
        <ul className='nav-links'>
          <li><a href='#home' className='active'>Home</a></li>
          <li><a href='#about'>About us</a></li>
          <li><a href='#courses'>Courses</a></li>
          <li><a href='#insights'>Insights</a></li>
          <li><a href='#registration'>Registration</a></li>
          <li><a href='#contact'>Contact us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
