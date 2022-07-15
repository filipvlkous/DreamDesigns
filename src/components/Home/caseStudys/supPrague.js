import React from "react";
import Test from "../../../img/home/caseStudy/text.svg";
import Card from "./card";
import styled from "styled-components";
import web1 from "../../../img/home/caseStudy/Perspective-Web-Design-Mockup.webp";

export const Line = styled.div`
  border-bottom: 0.25vw solid #fff;
  width: 6%;
  border-radius: 10vw;
  border-color: #4f95f2;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 0.2vw 0.4vw;
`;
export default function SupPrague() {
  return (
    <CaseStudyContainer>
      <ImgContainer>
        <ImgBg
          src={Test}
          //style={{ width: "45vw", height: "auto" }}
          alt={"SupPrague DreamDesign pozadi"}
        />

        <ImgWeb
          src={web1}
          alt={`design vyvoj brand https://cs.supprague.com/day-time`}
        />
      </ImgContainer>

      <CaseStudyText>
        <p
          style={{
            color: "#262626",
            fontWeight: 600,
            margin: 0,
          }}
        >
          Case Study
        </p>
        <Line />
        <div
          style={{ flexDirection: "row", display: "flex", paddingTop: "0.2vw" }}
        >
          <Card style={{ paddingLeft: 0 }}>Web</Card>
          <Card>SEO</Card>
          <Card>Brand</Card>
          <Card>UX/UI</Card>
        </div>

        <Jmeno>SupPrague</Jmeno>
        <ParallexText>
          Firma SupPrague poskytuje kurzy plavby na paddleboardech.
        </ParallexText>
        <TextStyle>
          Pro firmu jsme kompletně zpracovali nový profesionální branding, na
          základě kterého jsme vytvořili i webovou vizitku reprezentující
          působení firmy. Věděli jsme, že potřebujeme srozumitelný, důvěrn a
          profesionální vzhled, co bude pozitivně působit na partnery i
          zákazníky. Měli jsme tu čest a zodpovědnost být u toho vybudovat tak
          silný brand a posunuli jsme své schopnosti opět dál.
        </TextStyle>
      </CaseStudyText>
    </CaseStudyContainer>
  );
}

const TextStyle = styled.p`
  color: #818181;
  font-weight: 400;
  font-size: 1.27vw;
  line-height: 1.7;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 3.8vw;
    line-height: 1.4;
  }
`;

const Jmeno = styled.h1`
  color: #262626;
  font-size: 2.7vw;
  font-weight: 600;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 5vw;
  }
`;

const ParallexText = styled.p`
  color: #262626;
  font-size: 1.5vw;
  line-height: 1.3;
  padding-bottom: 1.1vw;
  font-weight: 400;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 3.8vw;
  }
`;

const CaseStudyContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 15%;
  padding-top: 6vw;
  padding-bottom: 6vw;
  align-items: center;
  position: relative;
  @media (max-width: 600px) {
    flex-direction: column-reverse;
    padding-right: 0;
    width: 100vw;
    justify-content: center;
  }
`;

const CaseStudyText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10%;

  @media (max-width: 600px) {
    width: 70vw;
    padding: 4vw;
    margin: 2vw;
    margin-left: 0;
  }
`;

const ImgBg = styled.img`
  width: 45vw;
  height: auto;
  @media (max-width: 600px) {
    width: 75vw;
  }
`;

const ImgWeb = styled.img`
  width: 52vw;
  position: absolute;
  right: 0;
  @media (max-width: 600px) {
    width: 100vw;
    right: -10%;
  }
`;

const ImgContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;
