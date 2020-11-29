import React from 'react';
import { StyledHeader, StyledHomeIcon, StyledNavMenu } from './header.styled.jsx';

const Header = () => (
  <StyledHeader>
    <StyledHomeIcon>
      <a id='landing_page' href='#landing_page'>&#8493;</a>
    </StyledHomeIcon>
    <StyledNavMenu>
      <a href='#about'>about</a>
      <a href='#work'>work</a>
      <a target="_top" href="mailto:couttstcolin@gmail.com?subject=project discovery">say hi!</a>
    </StyledNavMenu>
  </StyledHeader>
);

export default Header;