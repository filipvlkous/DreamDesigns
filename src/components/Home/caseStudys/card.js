import React from "react";
import styled from "styled-components";

export const CardContainer = styled.p`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 0.1vw 0.2vw;
  display: flex;
  font-weight: 300;
  color: #434343;
  padding-inline: 1vw;
  background-color: #eef1f4;
  border-radius: 0.3vw;
  align-content: center;
  align-items: center;
  justify-content: center;
  font-size: 1.3vw;
  margin: 0px;
  padding-left: 1vw;
  padding-right: 1vw;
  @media (max-width: 600px) {
    font-size: 3vw;
  }
`;

export default function Card({ children, style }) {
  return (
    <div
      style={{
        padding: "0.6vw",
        ...style,
      }}
    >
      <CardContainer>{children}</CardContainer>
    </div>
  );
}
