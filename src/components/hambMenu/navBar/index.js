import React from "react";
import HamburgerMenu from "../hamburger/index";
import WebMenu from "../webMenu";
import styled from "styled-components";
import Icon from "./icon";
import useWindowDimensions from "../../../getDimension";
const NavbarContainer = styled.div`
  height: 4vw;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding: 0 1.5em;
  position: absolute;
  width: 100%;
`;

export default function Navbar({ offsetY, setOffsetY, color, execute }) {
  const { width } = useWindowDimensions();
  return (
    <div>
      <div
        style={{
          paddingLeft: "15%",
          position: "relative",
        }}
      >
        <Icon color={color} />
      </div>
      <NavbarContainer>
        <div style={{ position: "fixed" }}>
          <HamburgerMenu offsetY={offsetY} setOffsetY={setOffsetY} />
        </div>
        {width >= 600 ? (
          <div style={{ paddingRight: "6vw", paddingTop: "1.1vw" }}>
            <WebMenu offsetY={offsetY} color={color} execute={execute} />
          </div>
        ) : null}
      </NavbarContainer>
    </div>
  );
}
