import React from "react";
import styled from "styled-components";
import Strategie from "./proces/strategie";
import Design from "./proces/design";
import Techno from "./proces/techno";
import Start from "./proces/start";

export default function Body() {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        color: "#505050",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: "5vw",
          zIndex: 19,
        }}
      >
        <Heading>Proces</Heading>
        <Lines />
      </div>

      <Strategie />
      <Design />
      <Techno />
      <Start />
    </div>
  );
}

const Heading = styled.h2`
  font-weight: 600;
  margin: 0;
  font-size: 1.8vw;
  @media (max-width: 600px) {
    font-size: 4.7vw;
  }
`;

export const Lines = styled.div`
  border-bottom: 4px solid #fff;
  width: 100%;
  border-radius: 10px;
  border-color: #3a90f3;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
