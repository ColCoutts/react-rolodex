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
        <img src={image} alt='work-image' className='work-image'/>
      </div>
    <h2>{name}</h2>
    <p>{description}</p>
    <h3>{userName}</h3>
    <h3>{passWord}</h3>
    <i className={tech[0]}></i>
    <i className={tech[1]}></i>
    <nav className='nav-links'>
    <a href={links[0]} target='blank'>info</a>
    <a href={links[1]} target='blank'>site</a>
    </nav>
    </div>
    );
}

ProjectItem.propTypes = {
  name: PropTypes.string,
  tech: PropTypes.string,
  image: PropTypes.string,
  userName: PropTypes.string,
  passWord: PropTypes.string,
  links: PropTypes.string,
  description: PropTypes.string
};

export default ProjectItem;