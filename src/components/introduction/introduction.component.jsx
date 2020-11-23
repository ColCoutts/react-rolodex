import React from 'react';
import './introduction.styles.css';

import introImage from '../../../assets/intro-image.svg';

const Introduction = () => (
  <div className='introduction'>
    <div className='intro-image-container'>
    <img src={introImage} alt='intro image' className='intro-image' />
    </div>
    <div className='intro-text'>
    <p>
    My name is Colin Coutts, I&apos;m a Software Developer<br />
    passionate about telling user stories and collaborating <br />
    with other coders to bring projects to life.<br />
    </p>
    </div>
  </div>
);

export default Introduction;