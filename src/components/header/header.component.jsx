import React from 'react';
import './header.styles.css';

const Header = () => (
  <header className='header'>
    <div className='home'>
      <a id='landing_page' href='#landing_page'>&#8493;</a>
    </div>
    <nav className='nav-menu'>
      <a href='#about'>about</a>
      <a href='#work'>work</a>
       <a target="_top" href="mailto:couttstcolin@gmail.com?subject=project discovery">say hi!</a>
    </nav>
  </header>
);

export default Header;