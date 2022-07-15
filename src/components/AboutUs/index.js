import React from "react";
import Navbar from "../hambMenu/navBar";
import Footer from "../footer/ContactUs/index";
import Top from "./top";
import Body from "./body";
import Shape from "../../img/sluzby/Bg. Shape.png";
import Shape1 from "../../img/sluzby/Bg. Shape1.png";
import Shape3 from "../../img/sluzby/Bg. Shape3.png";
import { motion } from "framer-motion";
import styled from "styled-components";

export default function AboutUs({ offsetY, setOffsetY }) {
  const variants = {
    out: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
  };
  return (
    <motion.div
      exit="out"
      initial="out"
      animate="in"
      variants={variants}
      transition={{ ease: "easeOut" }}
    >
      <div style={{ zIndex: 99, position: "relative" }}>
        <Navbar offsetY={offsetY} setOffsetY={setOffsetY} color={"#56A3F6"} />
      </div>
      <Top />

      <div style={{ position: "relative" }}>
        <Img1 src={Shape} alt={"shape"} />
        <Img2 src={Shape1} alt={"shape"} />
        <Img3 src={Shape3} alt={"shape"} />
      </div>
      <div style={{ position: "relative" }}></div>

      <Body />
      <Footer color={"#56A3F6"} txtColor={"#fff"} emailClr={"#d3d3d3"} />
    </motion.div>
  );
}

const Img1 = styled.img`
  position: absolute;
  height: 80vw;
  width: auto;

  @media (max-width: 600px) {
    visibility: hidden;
  }
`;

const Img2 = styled.img`
  position: absolute;
  right: 0;
  height: 20vw;
  width: auto;

  @media (max-width: 600px) {
    visibility: hidden;
  }
`;

const Img3 = styled.img`
  position: absolute;
  height: 20vw;
  right: 0;
  top: 80vw;

  @media (max-width: 600px) {
    visibility: hidden;
  }
`;
