import styled from 'styled-components';

export const StyledCollectionItem = styled.div`
  border-top: 15px solid #dc4b4c;
  background-color: #f0efeb;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 30%;
  height: 38rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const TitleContainer = styled.div`
  width: 90%;
  padding-top: 1rem;
  height: 35%;
`;

export const Title = styled.h1`
  font-family: source-sans-pro, sans-serif;
  font-style: normal;
  font-weight: 600;
  padding-bottom: 1rem;
`;

export const Description = styled.p`
  font-family: source-sans-pro, sans-serif;
  font-weight: 400;
  font-style: regular;
  font-size: 1.25rem;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 60%;
  width: 90%;
`;

export const Heading = styled.h2`
  font-family: source-sans-pro, sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 1.5rem;
`;

export const InfoContainer = styled.div`
  font-family: source-sans-pro, sans-serif;
  font-weight: 400;
  font-style: regular;
  font-size: 1.2rem;
  text-align: center;

  padding-bottom: 1rem;
`;

export const ToolsContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 50%;
`;

export const ToolsItem = styled.div`
  font-family: source-sans-pro, sans-serif;
  font-weight: 400;
  font-style: regular;
  font-size: 1.25rem;
`;