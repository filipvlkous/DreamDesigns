import React from "react";
import styled from "styled-components";
import CardContainer from "./cardContainer";
import Curve from "../../../img/home/naseSluzby/curve2.svg";

const Continer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 3vw;
  align-items: center;
  justify-content: center;
  padding-bottom: 1vw;
  position: relative;
  p {
    line-height: 2;
    margin: 0;
    color: #000;
    font-weight: 300;
  }
`;

const TextContiner = styled.div`
  display: flex;
  width: 65%;
  h3 {
    font-size: 3vw;
    line-height: 1;
    color: #000;
    margin: 0;
    font-weight: 500;
  }
  p {
    font-size: 1.3vw;
  }
  @media (max-width: 600px) {
    flex-direction: column;

    p {
      padding-left: 0;
      font-size: 4vw;
      line-height: 1.5;
      padding-top: 2vw;
    }
    h3 {
      font-size: 6vw;
    }
  }
`;
const SluzbyText = styled.p`
  padding-left: 1.8vw;
  font-weight: 500 !important;
`;

export const Line = styled.div`
  border-bottom: 0.4vw solid #3a90f3;
  width: 30%;
  border-radius: 10vw;
  border-color: #3a90f3;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0.2vw 0.7vw;
  @media (max-width: 600px) {
    border-bottom: 0.8vw solid #3a90f3;
    width: 15%;
  }
`;

const BigContainer = styled.div`
  height: 30vw;
  position: relative;
  @media (max-width: 600px) {
    height: 350vw;
  }
`;
export default function NaseSluzby() {
  return (
    <BigContainer>
      <Continer>
        <TextContiner>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <h3>Naše Služby</h3>
            <Line />
          </div>
          <SluzbyText>
            Společnost Dream Designs vytváří živé produkty, které mění pravidla
            hry{" "}
            <span style={{ fontWeight: 300, color: "#505050" }}>
              pro firmy, startupy i jednotlivce.
            </span>
          </SluzbyText>
          <p
            style={{
              color: "#505050",
            }}
          >
            Využijeme váš stávající systém nebo analyzujeme a doporučíme
            nejlepší přístup a řešení pro vaše potřeby.
          </p>
        </TextContiner>
      </Continer>
      <CardContainer />

      <img
        src={Curve}
        alt={"curve"}
        style={{
          position: "absolute",
          display: "block",
          width: "100%",
          bottom: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
    </BigContainer>
  );
}
