import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import useWindowDimensions from "../../../getDimension";

const Button = styled.div`
  z-index: 99;
  cursor: pointer;
  padding: 0.5vw;
  transition: all 300ms;
  padding-top: 3vw;
`;

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeLinecap="round"
    strokeWidth="3"
    {...props}
  />
);

const SvgStyled = styled.svg`
  width: 7vw;
  display: flex;
  @media (max-width: 600px) {
    margin-top: 7vw;
  }
`;

const whileHover = { scale: 1.1 };
const transition = { duration: 0.3 };

export function MenuToggle({ toggle, isOpen }) {
  const { width } = useWindowDimensions();
  let size = width >= 600 ? "3vw" : "7vw";
  return (
    <Button isOpen={isOpen} onClick={toggle}>
      <SvgStyled width={size} height={size} viewBox="0 0 23 23">
        <Path
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5", stroke: "rgb(62,159, 252)" },
            open: { d: "M 3 16.5 L 17 2.5", stroke: "rgb(0, 0%, 18%)" },
          }}
          transition={transition}
          whileHover={whileHover}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          stroke="rgb(62,159, 252)"
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={transition}
          whileHover={whileHover}
        />
        <Path
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346", stroke: "rgb(62,159, 252)" },
            open: { d: "M 3 2.5 L 17 16.346", stroke: "rgb(0, 0%, 18%)" },
          }}
          transition={transition}
          whileHover={whileHover}
        />
      </SvgStyled>
    </Button>
  );
}
