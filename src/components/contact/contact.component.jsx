import React from 'react';

import
{
  StyledContact,
  ContactHeader,
  SubHeader,
  ContactButton
} from './contact.styled.jsx';

import './contact.styles.css';

const Contact = () => (
  <StyledContact>
    <ContactHeader>Interested in working on a project?</ContactHeader>
    <SubHeader>let&apos;s start a conversation</SubHeader>
    <ContactButton className='button' target="blank" href="mailto:couttstcolin@gmail.com?subject=Project Inquiry">Let&apos;s chat!</ContactButton>
  </StyledContact>
);

export default Contact;