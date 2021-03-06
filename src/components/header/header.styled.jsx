import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  height: 4rem;
  background-color: #fcfcfc;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledHomeIcon = styled.div`
  width: 6%;
  align-items: center;

  display: flex;
  justify-content: center;
  font-size: 2rem;
`;

export const StyledNavMenu = styled.nav`
   font-family: source-sans-pro, sans-serif;
  font-style: normal;
  font-weight: 200;

  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 10%;

  margin-right: 2rem;

  a {
    color: #3f3f3f;
    display: inline-block;
    text-decoration: none;
  }
`;
