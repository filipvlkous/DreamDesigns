import React from "react";
import Check from "./check";
import Body from "./body";
import Title from "./title";
import start from "../../../img/sluzby/start.svg";
import styled from "styled-components";
export default function Start() {
  return (
    <Container>
      <Img src={start} alt={"Dream Designs start logo"} />

      <TextContainer>
        <Title>Spuštění</Title>
        <Body>
          Spolupracujeme s vámi na každém kroku, abychom zajistili, že spuštění
          aplikace bude optimální a pro všechny bude významnou výhrou.
        </Body>

        <CheckTitle>S námi získáte…</CheckTitle>
        <Check>Školení do začátku</Check>
        <Check>Rychlou podporu 24/7</Check>
        <Check>Nárůst oslovených zákazníků</Check>
      </TextContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 10vw;
  @media (max-width: 600px) {
    align-items: center;
    flex-direction: column-reverse;
  }
`;

const TextContainer = styled.div`
  width: 45%;
  padding-left: 120px;
  @media (max-width: 600px) {
    width: 65%;
    padding-left: 0;
  }
`;

const CheckTitle = styled.h5`
  font-weight: 500;
  padding-top: 15px;
  font-size: 1.27vw;
  margin: 0;
  @media (max-width: 600px) {
    padding-top: 5vw;
    font-size: 3.8vw;
  }
`;

const Img = styled.img`
  width: 20vw;
  @media (max-width: 600px) {
    padding-top: 10vw;
    width: 60vw;
  }
`;
