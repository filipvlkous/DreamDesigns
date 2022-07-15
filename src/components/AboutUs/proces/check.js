import React from "react";
import check from "../../../img/sluzby/check.svg";
import styled from "styled-components";
export default function Check({ children }) {
  return (
    <Container>
      <ImgCheck src={check} alt={"check"} />{" "}
      <p style={{ margin: 0 }}>{children}</p>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.1vw;
  font-weight: 300;
  @media (max-width: 600px) {
    font-size: 3.8vw;
  }
`;

const ImgCheck = styled.img`
  width: 5%;
  height: auto;
  @media (max-width: 600px) {
    width: 7%;
    margin-right: 3vw;
  }
`;
