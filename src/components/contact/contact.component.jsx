import React from 'react';
import './contact.styles.css';

const Contact = () => (
  <div className='contact'>
    <h1 className='contact-header'>Interested in working on a project?</h1>
    <p className='contact-sub-header'>let&apos;s start a conversation</p>
    <a className='button' target="_top" href="mailto:your@email.address?subject=I've got a project!">Let&apos;s chat!</a>
  </div>
);

export default Contact;