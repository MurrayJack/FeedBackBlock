import React from "react";
import styled from "styled-components";

export const Person = ({ Item, Selected, OnClick, Index }) => (
  <PersonWrapper
    className={Selected ? "selected" : null}
    onClick={!Selected ? OnClick.bind(this, Item, Index) : undefined}
    aria-label={Item.Name}
  >
    <div>
      <ImageWrapper style={{ backgroundImage: `url(${Item.Image})` }} />
    </div>
    <PersonName>{Item.Name}</PersonName>
    <PositionName>{Item.Position}</PositionName>
  </PersonWrapper>
);

const PositionName = styled.div`
  text-align: center;
  opacity: 0.8;
`;

const PersonName = styled.div`
  text-align: center;
`;

const PersonWrapper = styled.button`
  border-radius: 5px;
  padding: 30px;
  color: #1c364c;
  font-size: 18px;
  line-height: 24px;
  border: 1px solid transparent;
  cursor: pointer;
  width: 240px;
  max-width: 240px;
  display: flex;
  flex-direction: column;
  align-items: center
  filter: grayscale(100%);
  transition: all linear 0.25s;
  margin: 5px

  &.selected {
    position: relative;
    background-color: #f6f8fa;
    filter: grayscale(0);
    z-index: 1; 
    border: 1px solid #f6f8fa;
  }

  &:hover {
    border: 1px solid #f6f8fa;
    filter: grayscale(0); 
  }
`;

const ImageWrapper = styled.div`
  height: 85px;
  width: 85px;
  border-radius: 50%;
  background-color: #f6f8fa;
  margin-bottom: 20px;
  overflow: hidden;
  background-position: center;
  background-size: cover;
`;
