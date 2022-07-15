import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavMenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const NavList = styled.nav`
  padding: 0 0.8em;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const NavLink = styled(motion.div)`
  font-weight: 600;
  height: 12vh;
  display: flex;
  align-items: center;

  a,
  p {
    cursor: pointer;
    text-decoration: none;
    color: #000;
    font-size: 1.5vw;
    transition: all 200ms ease-in-out;
  }

  @media (max-width: 600px) {
    a,
    p {
      font-size: 4.5vw;
    }
  }
  &:hover {
    a,
    p {
      color: #56a3f6;
    }
  }
`;

const variants = {
  show: {
    transform: "translateX(0em)",
    opacity: 1,
  },
  hide: {
    transform: "translateX(5em)",
    opacity: 0,
  },
};

export function NavMenu({ isOpen, setOffsetY, setIsOpen }) {
  return (
    <NavMenuContainer>
      <NavList>
        <NavLink
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.3, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.05, duration: 0.1 },
            },
          }}
        >
          <Link
            to="/"
            onClick={() => {
              setOffsetY(true);
              setIsOpen(false);
              window.scrollTo(0, 0);
            }}
          >
            Úvod
          </Link>
        </NavLink>
        <NavLink
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.4, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.1, duration: 0.05 },
            },
          }}
        >
          <Link
            to="/sluzby"
            onClick={() => {
              setOffsetY(true);
              setIsOpen(false);
              window.scrollTo(0, 0);
            }}
          >
            Proces
          </Link>
        </NavLink>
        <NavLink
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.5, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.15, duration: 0.05 },
            },
          }}
        >
          <p
            href={"#"}
            onClick={() => {
              window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth",
              });
              setIsOpen(false);
            }}
          >
            Kontakt
          </p>
        </NavLink>
      </NavList>
    </NavMenuContainer>
  );
}
