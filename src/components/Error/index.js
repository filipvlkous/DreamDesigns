import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default function Index() {
  return (
    <Container>
      <LogoContainer>
        <SvgContainer viewBox="0 0 39 59">
          <path
            id="Path_1"
            data-name="Path 1"
            d="M5.117,0h7.322A24.563,24.563,0,0,1,37,24.563,23.539,23.539,0,0,1,13.462,48.1H5.117A5.117,5.117,0,0,1,0,42.985V5.117A5.117,5.117,0,0,1,5.117,0Z"
            fill={"#3a90f3"}
          />
        </SvgContainer>
        <LogoText>
          <p>ream</p>
          <p>esign</p>
        </LogoText>
      </LogoContainer>

      <Err>Chyba 404...</Err>
      <p style={{ margin: 0 }}> Stránka nenalezena.</p>
      <Link to="/">Zpátky</Link>
      <Img src="https://c.tenor.com/lx2WSGRk8bcAAAAC/pulp-fiction-john-travolta.gif" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding-top: 1vw;
`;

const Err = styled.h3`
  color: #3a90f3;
  font-size: 6vw;
  margin: 0;
`;

const Img = styled.img`
  width: 30%;
  @media (max-width: 600px) {
    width: 50%;
  }
`;

const LogoText = styled.div`
  margin: 0;
`;

const SvgContainer = styled.svg`
  width: 3vw;
  @media (max-width: 600px) {
    width: 8vw;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  color: #3a90f3;
  p {
    font-size: 1.5vw;
    margin: 0;
    line-height: 1;
    font-weight: 500;
  }

  @media (max-width: 600px) {
    margin-top: 0.5vh;

    p {
      font-size: 4vw;
    }
  }
`;
