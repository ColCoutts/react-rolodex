import styled from 'styled-components';

export const StyledFooter = styled.div`
  width: 100vw;
  height: 50%;

  background-color: #3f3f3f;

  display: flex;
  flex-direction: column;

  justify-content: space-evenly;
  align-items: center;
`;

export const FooterLogo = styled.a`
  color: #dc4b4c;
  display: inline-block;

  font-size: 4rem;
`;

export const FooterLinks = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 10rem;
  color: #fcfcfc;
  font-size: 2rem;


    img {
      filter: opacity(0.4) drop-shadow(0 0 0 #f0efeb) saturate(10%);
      height: 3.5rem;
      width: auto;
    }
`;

export const FooterText = styled.p`
  font-family: source-sans-pro, sans-serif;
  font-style: normal;
  font-weight: 400;

  font-size: 1.25rem;
  color: #f0efeb;
`;

export const FooterTextSub = styled.p`
  font-family: source-sans-pro, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  font-weight: 600;
`;
