import React from 'react';
import PropTypes from 'prop-types';

import './collection-item.styles.css';

const CollectionItem = ({ title, info, tools}) => (
  <div className='collection-item'>
    <h1 className='title'>{title}</h1>
    <div className='languages'>
      {
        info.map( ( { id, info } ) => (
          <span key={id}>{info}</span>
        ))
      }
    </div>
    <div className='tools'>
    {
        tools.map( ( { id, tool } ) => (
          <span key={id}>{tool}</span>
      ))
    }
    </div>
  </div>
);

CollectionItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  info: PropTypes.array,
  tools: PropTypes.array
};

export default CollectionItem;