import React from "react";
import styled from "styled-components";

export default function Icon({ color }) {
  return (
    <Container txtColor={color}>
      <SvgContainer viewBox="0 0 39 59">
        <path
          id="Path_1"
          data-name="Path 1"
          d="M5.117,0h7.322A24.563,24.563,0,0,1,37,24.563,23.539,23.539,0,0,1,13.462,48.1H5.117A5.117,5.117,0,0,1,0,42.985V5.117A5.117,5.117,0,0,1,5.117,0Z"
          fill={color}
        />
      </SvgContainer>
      <LogoText>
        <p>ream</p>
        <p>esign</p>
      </LogoText>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  position: absolute;
  flex-direction: row;
  align-items: center;
  margin-top: 1.5vh;
  p {
    font-size: 1.7vw;
    margin: 0;
    line-height: 1;
    font-weight: 500;
    color: ${(props) => props.txtColor};
  }
  @media (max-width: 600px) {
    margin-top: 0.5vh;

    p {
      font-size: 4vw;
    }
  }
`;

const LogoText = styled.div`
  margin: 0;
`;

const SvgContainer = styled.svg`
  width: 4vw;
  @media (max-width: 600px) {
    width: 8vw;
  }
`;
