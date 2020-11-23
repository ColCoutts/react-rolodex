import React from 'react';
import PropTypes from 'prop-types';

import './collection-item.styles.css';

const CollectionItem = ({ title, info, tools, description, heading1, heading2}) => (
  <div className='collection-item'>
    <div className='title-container'>
      <h1 className='title'>{title}</h1>
      <p className='description'>{description}</p>
    </div>
    <div className='content-container'>
    <h2 className='heading'>{heading1}</h2>
    <div className='info'>
        {
      info.map( ( { id, info } ) => (
        <span key={id}>{ (id ? ', ' : '') + info}</span>
        ))
      }
      </div>
      <h2 className='heading'>{heading2}</h2>
      <div className='tools-container'>
      <div className='tools'>
      {
        tools.map( ( { id, tool } ) => (
          <p key={id}>{tool}</p>
          ))
        }
        </div>
        </div>
      </div>
  </div>
);

CollectionItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  info: PropTypes.array,
  tools: PropTypes.array,
  description: PropTypes.string,
  heading1: PropTypes.string,
  heading2: PropTypes.string
};

export default CollectionItem;