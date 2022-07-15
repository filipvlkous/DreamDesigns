import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MenuContainer = styled(motion.nav)`
  display: flex;
  width: 100%;
  max-width: 40%;
  padding-top: 30px;
  align-items: center;
`;
const NavLink = styled(motion.p)`
  font-weight: 600;
  padding: 0 3vw;
  display: flex;

  a,
  p {
    margin: 0;
    color: ${(props) => props.color};
    cursor: pointer;
    text-decoration: none;
    font-size: 1.3vw;
  }
`;

const scrollMenu = {
  scrolled: {
    opacity: 0,
  },
  top: {
    opacity: 1,
  },
};

const StyledLink = styled(Link)`
  position: relative;
  color: ${(props) => props.clr};
  text-decoration: none;
  font-weight: 500;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 0.4vh;
    bottom: 0;
    left: 0;
    background-color: ${(props) => props.clr};
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
    border-radius: 2vw;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

export default function WebMenu({ offsetY, color, execute }) {
  const arr = [
    { name: "Úvod", linkTo: "/" },
    { name: "Proces", linkTo: "/sluzby" },
  ];
  return (
    <MenuContainer>
      {arr.map((m, i) => (
        <motion.div key={i} whileTap={{ scale: 0.9 }}>
          <NavLink
            color={color}
            style={offsetY === false ? { pointerEvents: "none" } : null}
            variants={scrollMenu}
            initial={"top"}
            transition={offsetY === false ? null : { delay: i * 0.2 }}
            animate={offsetY === false ? "scrolled" : "top"}
          >
            <StyledLink clr={color} to={m.linkTo}>
              {m.name}
            </StyledLink>
          </NavLink>
        </motion.div>
      ))}
      <motion.div whileTap={{ scale: 0.9 }}>
        <NavLink
          color={color}
          style={offsetY === false ? { pointerEvents: "none" } : null}
          variants={scrollMenu}
          initial={"top"}
          transition={offsetY === false ? null : { delay: 0.4 }}
          animate={offsetY === false ? "scrolled" : "top"}
        >
          <StyledA
            clr={color}
            onClick={() =>
              window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth",
              })
            }
          >
            Kontakt
          </StyledA>
        </NavLink>
      </motion.div>
    </MenuContainer>
  );
}

const StyledA = styled.a`
  position: relative;
  color: ${(props) => props.clr};
  text-decoration: none;
  font-weight: 500;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 0.4vh;
    bottom: 0;
    left: 0;
    background-color: ${(props) => props.clr};
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
    border-radius: 2vw;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;
