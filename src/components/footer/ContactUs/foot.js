import React from "react";
import styled from "styled-components";

export default function Foot({ txtColor }) {
  return (
    <Container>
      <Text>
        Copyright © 2022 <Span txtColor={txtColor}>DreamDesigns.cz</Span>{" "}
        Všechna práva vyhrazena.
      </Text>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  color: #000;
  justify-content: center;
  margin-top: 1vw;
`;

const Text = styled.p`
  color: #000;
  font-weight: 500;
  font-size: 1vw;
  @media (max-width: 600px) {
    font-size: 2.5vw;
  }
`;

const Span = styled.span`
  color: ${(props) => (props.txtColor === "#fff" ? "#fff" : "#4f95f2")};
`;
