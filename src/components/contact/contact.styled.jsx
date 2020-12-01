import styled from 'styled-components';

export const StyledContact = styled.div`
  width: 100vw;
  height: 50%;
  background-color: #fcfcfc;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  border-top: 2px solid #dc4b4c;
`;

export const ContactHeader = styled.h1`
  font-family: utopia-std-headline, serif;
  font-weight: 800;
  font-style: normal;
  font-size: 3rem;
  margin-top: 1rem;
`;

export const SubHeader = styled.p`
  color: #3f3f3f;
  font-family: source-sans-pro, sans-serif;
  font-weight: 600;
  font-style: regular;
  font-size: 2rem;
  padding-bottom: 2rem;
`;

export const ContactButton = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 2px solid #3f3f3f;
  border-radius: 25px;
  width: 9rem;
  height: 3rem;

  color: #3f3f3f;
  font-family: source-sans-pro, sans-serif;
  font-weight: 600;
  font-style: regular;
  font-size: 1.5rem;

  margin-bottom: 2rem;
`;