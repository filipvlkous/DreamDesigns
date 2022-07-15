import React from "react";
import styled from "styled-components";
export const Lines = styled.div`
  border-bottom: 4px solid #fff;
  width: 30%;
  border-radius: 10px;
  border-color: #3a90f3;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
export default function Line() {
  return <Lines />;
}
