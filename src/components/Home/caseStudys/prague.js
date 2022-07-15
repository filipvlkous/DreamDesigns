import React from "react";
import styled from "styled-components";
import PragueD from "../../../img/home/caseStudy/pragueD.svg";
import temaplate from "../../../img/home/caseStudy/pragueDtest.webp";
import Card from "./card";

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
  justify-content: flex-start;
  align-content: center;
  align-items: center;
  padding-left: 20%;
  position: relative;
  padding-bottom: 1vw;
  @media (max-width: 600px) {
    flex-direction: column;
    padding-left: 0;
    justify-content: center;
    width: 100vw;
    align-items: center;
    justify-content: center;
    padding-bottom: 7vw;
  }
`;

const CaseStudyText = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10%;
  @media (max-width: 600px) {
    width: 70vw;
    padding: 4vw;
    margin: 2vw;
    margin-right: 0;
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
  width: 40vw;
  position: absolute;
  right: 5vw;
  @media (max-width: 600px) {
    width: 70vw;
    right: 1%;
  }
`;

const ImgContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Line = styled.div`
  border-bottom: 0.25vw solid #fff;
  width: 7%;
  border-radius: 10vw;
  border-color: #4f95f2;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 0.2vw 0.4vw;
`;

export default function Vozickov() {
  return (
    <CaseStudyContainer>
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
          style={{
            flexDirection: "row",
            display: "flex",
            paddingTop: "0.25vw",
          }}
        >
          <Card style={{ paddingLeft: 0 }}>Web</Card>
          <Card>Brand</Card>
          <Card>UX/UI</Card>
        </div>

        <Jmeno>Prague Romantic</Jmeno>
        <ParallexText>
          Pro Prague Romantic jsme od základu vytvořili webové stránky, a to
          včetně složení nového brandu.
        </ParallexText>

        <TextStyle>
          Abychom docílili prolnutí mezi moderním vznešeným designem a dojmu,
          který poukáže na velkolepost zážitku, tak jsme zvolili vždy dominantní
          vystihující obrázek do hlavičky stránky, po které následuje světlým
          pozadím s docílením kontrastu. Mohli jsme si dovolit nebýt
          konzervativní, a tak jsme na mnoho míst zanesli moderní, odlehčené
          prvky, které zdobí celkovou podobu. Globálně jsou aplikovány ostré
          elementy a barvy v kombinaci odstínů šedi a tmavě červené.
        </TextStyle>
      </CaseStudyText>
      <ImgContainer>
        <ImgWeb src={temaplate} alt={"Vozickov web a aplikace"} />
        <ImgBg src={PragueD} alt={"pozadi"} />
      </ImgContainer>
    </CaseStudyContainer>
  );
}
