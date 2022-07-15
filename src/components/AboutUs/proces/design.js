import React from "react";
import Check from "./check";
import Body from "./body";
import Title from "./title";
import { Parallax } from "react-scroll-parallax";
import styled from "styled-components";
import design from "../../../img/sluzby/design.svg";
import imgBg from "../../../img/sluzby/imgBg.svg";

export default function Design() {
  return (
    <Container>
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ImgContainer>
          <Parallax y={["10%", "-15%"]}>
            <Img src={design} alt={"Dream Designs design logo"} />
          </Parallax>
        </ImgContainer>

        <ImgBg src={imgBg} alt={"background"} />
      </div>
      <TextContainer>
        <Title>Design</Title>
        <Body>
          Vytvořit jednotný a jasný design je vždy výzva. Je ovšem nezbytná
          záležitost, abychom byli vnímáni jako důstojný hráč na trhu. Pomůžeme
          Vám vybudovat důvěru skrze svěží design a ucelené podklady.
        </Body>

        <CheckTitle>S námi získáte…</CheckTitle>
        <Check>Unikátní vnímaní zážitku</Check>
        <Check>Ucelenou vizuální identitu</Check>
        <Check>Podtržení hodnot Vaší značky</Check>
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
  width: 12.5vw;
  @media (max-width: 600px) {
    width: 30vw;
  }
`;

const ImgBg = styled.img`
  height: auto;
  width: 25vw;
  @media (max-width: 600px) {
    width: 60vw;
  }
`;

const ImgContainer = styled.div`
  position: absolute;
  right: 28.5%;
  @media (max-width: 600px) {
    right: 17vw;
  }
`;
