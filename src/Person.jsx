import React from "react";
import styled from "styled-components";

export const Person = ({ Item, OnClick, Selected }) => (
  <PersonWrapper onClick={OnClick.bind(this, Item)}>
    <div>
      <Image />
    </div>
    <PersonName>{Item.Name}</PersonName>
    <PositionName>{Item.Position}</PositionName>
  </PersonWrapper>
);

const PositionName = styled.div`
  text-align: center;
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
  align-items: center;

  &:focus {
    position: relative;
    background-color: #f6f8fa;
  }

  &:hover {
    border: 1px solid #ddd;
  }
`;

const Image = styled.div`
  height: 85px;
  width: 85px;
  border-radius: 50%;
  background-color: #f6f8fa;
  margin-bottom: 20px;
`;
