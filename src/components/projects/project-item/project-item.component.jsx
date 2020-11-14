import React from 'react';
import PropTypes from 'prop-types';

import './project-item.styles.css';

const ProjectItem = ({title, imgURL, linkURL, description}) => (
  <div className='project-item'>
  <p>{imgURL}</p>
    <h1>{title}</h1>
    <p>{description}</p>
    <p>{linkURL}</p>
  </div>
);

ProjectItem.propTypes = {
  title: PropTypes.string,
  imgURL: PropTypes.string,
  linkURL: PropTypes.string,
  description: PropTypes.string
};

export default ProjectItem;