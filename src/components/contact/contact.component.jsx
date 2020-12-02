import React from 'react';

import { StyledH1Text2 } from '../styled-components/h1.styled.jsx';

import
{
  StyledContact,
  SubHeader,
  ContactButton
} from './contact.styled.jsx';

import './contact.styles.css';

const Contact = () => (
  <StyledContact>
    <StyledH1Text2>Interested in working on a project?</StyledH1Text2>
    <SubHeader>let&apos;s start a conversation</SubHeader>
    <ContactButton className='button' target="blank" href="mailto:couttstcolin@gmail.com?subject=Project Inquiry">Let&apos;s chat!</ContactButton>
  </StyledContact>
);

export default Contact;