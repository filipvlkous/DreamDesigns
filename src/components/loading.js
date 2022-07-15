import React from "react";
import "./loading.css";
import styled from "styled-components";
export default function Loading() {
  return (
    <Container>
      <div className="dots-bars-6"></div>
      <Text>Načítání...</Text>
    </Container>
  );
}

const Text = styled.p`
  font-weight: bold;
  font-size: 30px;
`;

const Container = styled.div`
  color: #56a3f6;

  padding-top: 30vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
