import React from 'react';
import './project-heading.styles.css';

import workImage from '../../../assets/work-img.svg';

const ProjectHeading = () => (
  <div className='project-heading'>
  <div className='work-text'>
  <p>
  I&apos;m always looking to take on challenging projects<br />
  Below are a few projects I&apos;m proud to have been a part of<br />
  
  
  </p>
  </div>
  <div className='work-container'>
  <img src={workImage} alt='intro image' className='work-image' />
  </div>
  </div>
);

export default ProjectHeading;