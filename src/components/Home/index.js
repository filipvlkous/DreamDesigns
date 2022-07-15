import React, { useRef } from "react";
import FrontPage from "./frontendPage/index";
import NaseSluzby from "./naseSluzby/index";
import CaseStudys from "./caseStudys/index";
import styled from "styled-components";
import Navbar from "../hambMenu/navBar";
import { motion } from "framer-motion";
import Footer from "../footer/ContactUs/index";

export const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #eef1f4;
`;

export default function Home({ offsetY, setOffsetY }) {
  const myRef = useRef("caseStudy");
  const variants = {
    out: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
  };

  const executeScroll = () => {
    myRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      exit="out"
      animate="in"
      initial="out"
      variants={variants}
      transition={{ ease: "easeOut" }}
    >
      <div style={{ zIndex: 90, position: "relative" }}>
        <Navbar
          offsetY={offsetY}
          setOffsetY={setOffsetY}
          color={"#fff"}
          execute={executeScroll}
        />
      </div>
      <FrontPage offsetY={offsetY} setOffsetY={setOffsetY} />
      <InnerContainer>
        <NaseSluzby offsetY={offsetY} />

        <CaseStudys refMy={myRef} />
        <Footer emailClr={"#7f7f7f"} />
      </InnerContainer>
    </motion.div>
  );
}
