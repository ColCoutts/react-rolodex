import React from 'react';
import './hero.styles.css';

import hero from '../../../assets/undraw_Designer_by46.svg';

const Hero = () => (
  <div className='hero'>
    <h1 className='hero-copy'>Front End Developer & Designer</h1>
    <h2 className='hero-subcopy'>your friendly ghost in the machine</h2>
    <img src={hero} alt='hero image' className='hero-image' />
  </div>
);

export default Hero;