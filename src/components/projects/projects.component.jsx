import React from 'react';
import './projects.styles.css';

import PROJECT_DATA from './project.data.js';

import ProjectItem from './project-item/project-item.component';

const Projects = () => (
  <div className='projects'>
    <p>projects go here! card based display of most recent projects</p>
    <div className='project-list'>
      {
        PROJECT_DATA.map( ( { id, ...otherProjectProps } ) => (
          <ProjectItem key={id} {...otherProjectProps}/>
        ))
      }
    </div>
  </div>
);

export default Projects;