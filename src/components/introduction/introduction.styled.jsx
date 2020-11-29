import styled from 'styled-components';

export const StyledIntroduction = styled.div`
  width: 95vw;
  height: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IntroImage = styled.img`
  height: 18rem;
`;

export const IntroText = styled.div`
  width: 45%;
  height: 45%;
  color: #3f3f3f;
  font-family: source-sans-pro, sans-serif;
  font-weight: 700;
  font-style: regular;
  font-size: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CVButton = styled.a`
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
  align-self: flex-end;
`;