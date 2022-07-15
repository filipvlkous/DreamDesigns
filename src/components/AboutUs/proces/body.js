import React from "react";
import styled from "styled-components";
export default function Body({ children }) {
  return <Text>{children}</Text>;
}

const Text = styled.p`
  font-weight: 300;
  line-height: 1.4;
  margin: 0;
  font-size: 1.27vw;
  @media (max-width: 600px) {
    font-size: 3.8vw;
  }
`;
