import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export default function Button({
  children,
  color,
  backgroundColor,
  link,
  width,
  height,
}) {
  const buttonContainer = {
    borderRadius: 100,
    width: width,
    height: height,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    fontSize: "1.3vw",
  };
  return (
    <div>
      <motion.div
        whileHover={{
          scale: 1.01,
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 5px 10px 0px",
        }}
        whileTap={{ scale: 0.95 }}
        style={{
          ...buttonContainer,
          color: color,
          backgroundColor: backgroundColor,
        }}
      >
        <Link to={link} style={{ color: color, textDecoration: "none" }}>
          <p>{children}</p>
        </Link>
      </motion.div>
    </div>
  );
}
