import React from "react";
import Check from "./check";
import Body from "./body";
import Title from "./title";
import { Parallax } from "react-scroll-parallax";
import styled from "styled-components";
import strategie from "../../../img/sluzby/strategie.svg";
import imgBg from "../../../img/sluzby/imgBg.svg";

export default function Strategie() {
  return (
    <Container>
      <TextContainer>
        <Title>Strategie</Title>
        <Body>
          Prostředí webu je sice nepřátelské a silně kompetitivní, ale je to
          příležitost, jak velmi rychle vyniknout. S našimi schopnostmi Vám
          pomůžeme skloubit byznysovou strategii s digitální prezentací.
        </Body>

        <CheckTitle>S námi získáte…</CheckTitle>
        <Check>Jasnou vizi a účel</Check>
        <Check>Více kýžených obchodních příležitostí</Check>
        <Check>Nárůst oslovených zákazníků</Check>
      </TextContainer>
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ImgContainer>
          <Parallax y={["-20%", "1%"]}>
            <Img src={strategie} alt={"Dream Designs strategie logo"} />
          </Parallax>
        </ImgContainer>

        <ImgBg src={imgBg} alt={"background"} />
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 10vw;
  @media (max-width: 600px) {
    align-items: center;
    flex-direction: column;
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
