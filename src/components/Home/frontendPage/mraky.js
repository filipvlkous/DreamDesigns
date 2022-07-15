import React from "react";
import { motion } from "framer-motion";
import druhy from "../../../img/home/frontPage/mraky/druhy.svg";
import prvni from "../../../img/home/frontPage/mraky/prvni.svg";
import treti from "../../../img/home/frontPage/mraky/treti.svg";
import ctvrty from "../../../img/home/frontPage/mraky/ctvrty.svg";
import useWindowDimensions from "../../../getDimension";
export default function Mraky() {
  const { width } = useWindowDimensions();
  return (
    <motion.div
      variants={init}
      initial="hidenA"
      animate="visible"
      style={cloudsContainer}
    >
      <motion.div
        variants={cloudFlowVar}
        transition={cloudsFlowTrans}
        style={{
          position: "absolute",
          width: "60%",
          height: "auto",
          right: width >= 700 ? "80%" : "60%",
          bottom: "20%",
        }}
      >
        <img
          src={prvni}
          style={{ width: "100%", height: "auto" }}
          alt={"cloud1"}
        />
      </motion.div>
      )
      <motion.div
        variants={cloudFlowVar}
        transition={cloudsFlowTrans}
        style={{ width: "100%", height: "auto", zIndex: 190 }}
      >
        <img
          src={druhy}
          style={{ width: "100%", height: "auto" }}
          alt={"cloud2"}
        />
      </motion.div>
      <motion.div
        variants={cloudFlowVar}
        transition={cloudsFlowTrans}
        style={{
          position: "absolute",
          left: "17vw",
          width: "30%",
          height: "auto",
        }}
      >
        <img
          src={ctvrty}
          style={{ width: "100%", height: "auto" }}
          alt={"cloud3"}
        />
      </motion.div>
      <motion.div
        variants={cloudFlowVar}
        transition={cloudsFlowTrans}
        style={{ width: "100%", height: "auto" }}
      >
        <img
          src={treti}
          style={{ width: "100%", height: "auto" }}
          alt={"cloud4"}
        />
      </motion.div>
    </motion.div>
  );
}

const cloudsContainer = {
  display: "flex",
  position: "absolute",
  bottom: "10%",
  left: "7vw",
  width: "100%",
  height: "auto",
};

const cloudsFlowTrans = {
  duration: 1.5,
  ease: "easeInOut",
  repeat: Infinity,
  repeatType: "reverse",
};

const cloudFlowVar = {
  hiden: {
    y: 0,
  },
  visible: {
    y: "-1vw",
  },
};

const init = {
  hidenA: {
    opacity: 0,
    x: "-1.5vw",
    transition: {
      staggerChildren: 0.2,
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};
