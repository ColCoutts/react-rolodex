import React from 'react';
import PropTypes from 'prop-types';

import './project-item.styles.css';

function ProjectItem( { name, tech, image, description, userName, passWord, links } )
{
  // let imageProps = {
  //   backgroundImage: 'url(' + image + ')',
  //   backgroundSize: '70%'
  // };
  return (
    <div className='project-item'>
      <div className='image' >
      </div>
      <div className='info-container'>
      <h2 className='project-title'>{name}</h2>
      <p className='description'>{description}</p>
      <h3 className='credentials'>{userName}</h3>
      <h3 className='credentials'>{passWord}</h3>
      <i className={tech[0]}></i>
      <i className={tech[1]}></i>
      <nav className='nav-links'>
          <a href={links[0]} target='blank'>info</a>
          <span>|</span>
      <a href={links[1]} target='blank'>site</a>
      </nav>
      </div>
    </div>
    );
}

ProjectItem.propTypes = {
  name: PropTypes.string,
  tech: PropTypes.string,
  image: PropTypes.string,
  userName: PropTypes.string,
  passWord: PropTypes.string,
  links: PropTypes.array,
  description: PropTypes.string
};

export default ProjectItem;