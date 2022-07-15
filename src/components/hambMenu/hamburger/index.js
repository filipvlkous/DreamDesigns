import React, { useState } from "react";
import styled from "styled-components";
import { MenuToggle } from "./menuToggle";
import { motion } from "framer-motion";
import { NavMenu } from "./navMenu";
import useWindowDimensions from "../../../getDimension";
const HamMenuContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  right: 100%;
`;

const MenuContainer = styled(motion.div)`
  min-width: 300px;
  width: 100%;
  max-width: 44%;
  height: 100%;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  z-index: 90;
  top: 0;
  right: 0;
  user-select: none;
  padding: 1em 2.5em;
  position: fixed;
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

const mobilScroll = {
  top: {
    opacity: 1,
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
  const { width } = useWindowDimensions();

  return (
    <HamMenuContainer
      style={
        offsetY === true && width >= 600 ? { pointerEvents: "none" } : null
      }
      transition={transitionScroll}
      variants={width >= 600 ? scrollMenu : mobilScroll}
      initial={width >= 600 ? "top" : "scrolled"}
      animate={offsetY === true ? "top" : "scrolled"}
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
