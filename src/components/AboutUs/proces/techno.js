import React from "react";
import Check from "./check";
import Body from "./body";
import Title from "./title";
import { Parallax } from "react-scroll-parallax";

import techno from "../../../img/sluzby/techno.svg";
import imgBg from "../../../img/sluzby/imgBg.svg";
import styled from "styled-components";
export default function Techno() {
  return (
    <Container>
      <TextContainer>
        <Title>Technologie</Title>
        <Body>
          Produkt jako web měla by být Vaší předností, ne nudná koule na noze.
          Díky chytrým technologiím Vám pomáháme vyvíjet plynulý, funkční a
          bezpečný zážitek.
        </Body>

        <CheckTitle>S námi získáte…</CheckTitle>
        <Check>Stabilitu a bezpečnost</Check>
        <Check>Splynutí hnacích technologií</Check>
        <Check>Snadnou správu obsahu</Check>
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
            <Img src={techno} alt={"Dream Designs techologie logo"} />
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
