import React from 'react';
import './about.styles.css';

import ABOUT_DATA from './about.data';

import CollectionItem from './collection-item/collection-item.component';

// good time to use React state hooks
const About = () => (
  <div className='about'>
      <div className='collection-list'>
        {
          ABOUT_DATA.map( ( { id, ...otherAboutProps } ) => (
            <CollectionItem key={id} {...otherAboutProps} />
          ))
        }
      </div>
  </div>
  );


export default About;