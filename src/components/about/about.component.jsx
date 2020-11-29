import React, {useState} from 'react';
import './about.styles.css';

import ABOUT_DATA from './about.data';

import CollectionItem from './collection-item/collection-item.component';

// good time to use React state hooks
const About = () =>
{ 
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState( ABOUT_DATA );

  return(
    <div className='about'>
    <div className='collection-list'>
    {
      data.map( ( { id, ...otherAboutProps } ) => (
        <CollectionItem key={id} {...otherAboutProps} />
        ))
      }
      </div>
      </div>
      );
      
    };

export default About;