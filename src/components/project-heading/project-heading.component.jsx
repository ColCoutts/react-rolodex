import React from 'react';

import
{
  StyleProjectHeading,
  WorkContainer,
  WorkText,
  WorkImage
} from './project-heading.styled.jsx';

import './project-heading.styles.css';

import workImage from '../../../assets/work-img.svg';

const ProjectHeading = () => (
  <StyleProjectHeading>
  <WorkText>
  <p>
  I&apos;m always looking to take on challenging projects<br />
  Below are a few projects I&apos;m proud to have been a part of<br />
  </p>
  </WorkText>
  <WorkContainer>
  <WorkImage src={workImage} alt='intro image' className='work-image' />
  </WorkContainer>
  </StyleProjectHeading>
);

export default ProjectHeading;