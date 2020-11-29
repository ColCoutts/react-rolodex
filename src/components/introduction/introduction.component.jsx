import React from 'react';
import { StyledIntroduction, IntroImage, IntroText, CVButton } from './introduction.styled.jsx';

import introImage from '../../../assets/intro-image.svg';

const Introduction = () => (
  <StyledIntroduction>
    <IntroImage src={introImage} alt='intro image' className='intro-image' />
    <IntroText>
    <p>
    My name is Colin Coutts, I&apos;m a Software Developer<br />
    passionate about telling user stories and collaborating <br />
    with other coders to bring projects to life.<br />
    </p>
    <CVButton href='https://drive.google.com/file/d/18hZWfHaefewVjet4h9YCE-wWVgWw7eQf/view?usp=sharing' target='blank'>CV</CVButton>
    </IntroText>
  </StyledIntroduction>
);

export default Introduction;