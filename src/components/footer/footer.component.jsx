import React from 'react';
import './footer.styles.css';

import LinkedInImage from '../../../assets/linkedinlogo.svg';

import GitHubLogo from '../../../assets/GitHub-Mark-64px.png';

const Footer = () => (
  <div className='footer'>
  <div className='footer-icon'>
  <a className='footer-logo' href='#landing_page'>&#8493;</a>
    </div>
    <p className='footer-text'>leveling up one day at a time...</p>
    <nav className='footer-links'>
      <a href='https://github.com/ColCoutts' target='blank'>
        <img src={GitHubLogo} alt='github-logo' />
      </a>
      <a href='https://www.linkedin.com/in/colin-coutts/' target='blank'>
        <img src={LinkedInImage} alt='linkedin-logo' />
      </a>
    </nav>
    <p className='footer-text sub'>built with React & hosted by Netlify</p>
  </div>
);

export default Footer;