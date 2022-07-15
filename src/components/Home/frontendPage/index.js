import React from "react";
import styled from "styled-components";
import Curve from "../../../img/home/frontPage/curve.svg";
import { Parallax } from "react-scroll-parallax";
import Mraky from "./mraky";
import RocketD from "../../../img/home/frontPage/d_mobile.svg";
import Typewriter from "typewriter-effect";
import useWindowDimensions from "../../../getDimension";
const EnterContainer = styled.div`
  background: linear-gradient(to top, #59aaf8, #3b67e5);
`;

const TextContiner = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10%;
  align-items: center;
  height: 10%;
`;

const Container = styled.div`
  width: 70%;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 4vw;
  }
  p {
    font-size: 1.5vw;
    margin: 0;
    font-weight: 300;
    line-height: 1.6;
  }
  @media (max-width: 600px) {
    text-align: center;
    flex-direction: column;
    h2 {
      font-size: 9vw;
    }
    p {
      font-size: 4vw;
    }
  }
`;

const HeadingContainer = styled.div`
  padding-top: 2vw;
  padding-right: 5vw;
  padding-bottom: 10vw;
  @media (max-width: 600px) {
    padding-right: 0;
    padding-top: 7vw;
  }
`;

export default function Index() {
  const { width } = useWindowDimensions();

  return (
    <EnterContainer>
      <TextContiner>
        <Container width={width}>
          <HeadingContainer>
            <h2
              style={{
                fontWeight: 400,
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              Vystřelte
              <div style={{ fontWeight: 600 }}>
                <Typewriter
                  options={{ loop: true, autoStart: true }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("váš Produkt.")
                      .pauseFor(1000)
                      .deleteChars(9)

                      .typeString("i Aplikaci.")
                      .pauseFor(1000)
                      .deleteChars(11)

                      .typeString(" Web.")
                      .pauseFor(1000)
                      .deleteChars(5)

                      .typeString("e SEO.")
                      .pauseFor(1000)
                      .deleteChars(6)

                      .typeString(" Úspěch!")
                      .pauseFor(1500)
                      .deleteAll()
                      .pauseFor(1000)
                      .start();
                  }}
                />
              </div>
            </h2>
            <p
              style={{
                paddingTop: "2.5vw",
              }}
            >
              Pomáháme společnostem i jedincům vytvořit ojedinělou identitu,
              která poslouží jako prvnotřídní on-line zážitek.
            </p>
            <p
              style={{
                paddingTop: "1vw",
              }}
            >
              To, jak vypadáme na internetu, nebylo nikdy důležitější, než právě
              teď!
            </p>
          </HeadingContainer>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "auto",
            }}
          >
            <Parallax y={["-20%", "25%"]}>
              <img
                src={RocketD}
                style={{ width: "100%", height: "auto", pointerEvents: "none" }}
                alt={"Dream Designs logo"}
              />
            </Parallax>

            <Mraky />
          </div>
        </Container>
      </TextContiner>

      <img
        src={Curve}
        alt={"curve"}
        style={{
          margin: 0,
          border: 0,
          display: "block",
          width: "100%",
          pointerEvents: "none",
        }}
      />
    </EnterContainer>
  );
}
