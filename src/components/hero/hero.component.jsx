import React from 'react';

import { StyledH1Text } from '../styled-components/h1.styled.jsx';

import './hero.styles.css';

import hero from '../../../assets/undraw_Designer_by46.svg';

const Hero = () => (
  <div className='hero'>
    <StyledH1Text>Front End Developer & Designer</StyledH1Text>
    <h2 className='hero-subcopy'>your friendly ghost in the machine</h2>
    <img src={hero} alt='hero image' className='hero-image' />
  </div>
);

export default Hero;