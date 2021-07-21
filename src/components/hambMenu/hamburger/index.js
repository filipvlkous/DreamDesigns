import React, { useState } from "react";
import styled from "styled-components";
import { MenuToggle } from "./menuToggle";
import { motion } from "framer-motion";
import { NavMenu } from "./navMenu";
const HamMenuContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  position: fixed;
  right: 100%;
`;

const MenuContainer = styled(motion.div)`
  min-width: 300px;
  width: 100%;
  max-width: 44%;
  height: 100%;
  background-color: #fff;
  box-shadow: -3px 0 2px rgba(15, 15, 15, 0.1);
  z-index: 90;
  position: fixed;
  top: 0;
  right: 0;

  user-select: none;
  padding: 1em 2.5em;
`;

const menuVariants = {
  open: {
    transform: "translateX(3%)",
  },
  closed: {
    transform: "translateX(103%)",
  },
};

const menuTransition = {
  type: "tween",
  duration: 1,
  stiffness: 33,
  delay: 0.1,
};

const scrollMenu = {
  top: {
    opacity: 0,
  },
  scrolled: {
    opacity: 1,
  },
};

export default function HamburgerMenu({ offsetY, setOffsetY }) {
  const [isOpen, setIsOpen] = useState(false);
  const transitionScroll = {
    duration: 0.5,
  };

  return (
    <HamMenuContainer
      style={offsetY <= 20 ? { pointerEvents: "none" } : null}
      initial={"top"}
      variants={scrollMenu}
      animate={offsetY <= 20 ? "top" : "scrolled"}
      transition={transitionScroll}
    >
      <MenuToggle
        toggle={() => setIsOpen(!isOpen)}
        isOpen={isOpen}
        offsetY={offsetY}
      />
      <MenuContainer
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        transition={menuTransition}
      >
        <NavMenu
          isOpen={isOpen}
          setOffsetY={setOffsetY}
          setIsOpen={() => setIsOpen(false)}
        />
      </MenuContainer>
    </HamMenuContainer>
  );
}
