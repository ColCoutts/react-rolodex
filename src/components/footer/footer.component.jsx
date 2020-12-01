import React from 'react';

import
{
  StyledFooter,
  FooterLogo,
  FooterLinks,
  FooterText,
  FooterTextSub
} from './footer.styled.jsx';

import './footer.styles.css';

import LinkedInImage from '../../../assets/linkedinlogo.svg';
import GitHubLogo from '../../../assets/GitHub-Mark-64px.png';

const Footer = () => (
  <StyledFooter>
  <FooterLogo href='#landing_page'>&#8493;</FooterLogo>
    <FooterText>leveling up one day at a time...</FooterText>
    <FooterLinks>
      <a href='https://github.com/ColCoutts' target='blank'>
        <img src={GitHubLogo} alt='github-logo' />
      </a>
      <a href='https://www.linkedin.com/in/colin-coutts/' target='blank'>
        <img src={LinkedInImage} alt='linkedin-logo' />
      </a>
    </FooterLinks>
    <FooterTextSub>built with React & hosted by Netlify</FooterTextSub>
  </StyledFooter>
);

export default Footer;