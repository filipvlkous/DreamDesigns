import React from "react";
import styled from "styled-components";
export default function Title({ children }) {
  return <TitleStyle>{children}</TitleStyle>;
}

const TitleStyle = styled.h2`
  font-weight: 500;
  font-size: 1.6vw;
  padding-bottom: 20;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 4.5vw;
    padding-bottom: 3vw;
  }
`;
