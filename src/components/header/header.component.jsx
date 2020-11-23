import React from 'react';
import './header.styles.css';

const Header = () => (
  <header className='header'>
    <div className='home'>
      <a href='#landing_page'>&#8493;</a>
    </div>
    <nav className='nav menu'>
      <a href='#about'>about</a>
      <a href='#work'>work</a>
      <a href='work'>say hi!</a>
    </nav>
  </header>
);

export default Header;