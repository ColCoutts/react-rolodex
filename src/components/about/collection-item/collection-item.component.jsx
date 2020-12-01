import React from 'react';
import PropTypes from 'prop-types';

import
  {
    StyledCollectionItem,
    TitleContainer,
    Title,
    Description,
    ContentContainer,
    Heading,
    InfoContainer,
    ToolsContainer,
    ToolsItem
  } from './collection-item.styled';

import './collection-item.styles.css';

const CollectionItem = ({ title, info, tools, description, heading1, heading2}) => (
  <StyledCollectionItem>
    <TitleContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </TitleContainer>
    <ContentContainer>
    <Heading>{heading1}</Heading>
    <InfoContainer>
        {
      info.map( ( { id, info } ) => (
        <span key={id}>{ (id ? ', ' : '') + info}</span>
        ))
      }
      </InfoContainer>
      <Heading>{heading2}</Heading>
      <ToolsContainer>
      <ToolsItem>
      {
        tools.map( ( { id, tool } ) => (
          <p key={id}>{tool}</p>
          ))
        }
        </ToolsItem>
        </ToolsContainer>
      </ContentContainer>
  </StyledCollectionItem>
);

CollectionItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  info: PropTypes.array,
  tools: PropTypes.array,
  description: PropTypes.string,
  heading1: PropTypes.string,
  heading2: PropTypes.string
};

export default CollectionItem;