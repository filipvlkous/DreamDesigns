import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import vectorImg from "../../img/sluzby/Vector Illustration.png";

export default function Top() {
  return (
    <Container>
      <TextContiner>
        <Heading
          initial={{ y: "-200%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring", bounce: 0.35 }}
        >
          Je třeba tvořit tak, <br />
          aby si to lidé
          <br />
          <span style={{ fontWeight: 600 }}> pamatovali</span>.
        </Heading>
        <SubHead
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1.1,
            type: "spring",
            bounce: 0.05,
            delay: 0.1,
          }}
          style={{
            width: "70%",
            margin: 0,
          }}
        >
          Tvoříme s Vámi nezapomenutelné weby a aplikace, abychom dosáhli Vašich
          digitálních cílů perfektně oslovit zákazníka.
        </SubHead>
        <SubHead
          initial={{ y: "300%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            type: "spring",
            bounce: 0.35,
            delay: 0.4,
          }}
          style={{
            paddingTop: "1vw",
          }}
        >
          Buďte součástí tohoto zážitku s námi!
        </SubHead>
      </TextContiner>
      <HeroImg src={vectorImg} alt={"Hero Img"} />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 15%;
  display: flex;
  flex-direction: row;

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`;

const TextContiner = styled.div`
  z-index: 90;
  padding-top: 8%;
  width: 70%;
  padding-left: 15%;
  color: #505050;

  @media (max-width: 600px) {
    width: 100%;
    padding-left: 0;
    margin-top: 5vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const HeroImg = styled.img`
  position: absolute;
  border: 0;
  display: block;
  width: 40%;
  right: 0;
  top: 0;
  @media (max-width: 600px) {
    position: static;
    margin-left: auto;
    width: 80%;
    float: right;
  }
`;

const Heading = styled(motion.h1)`
  line-height: 1.2;
  font-size: 4vw;
  font-weight: 300;
  @media (max-width: 600px) {
    font-size: 7.5vw;
  }
`;

const SubHead = styled(motion.h2)`
  font-weight: 300;
  font-size: 1.6vw;
  @media (max-width: 600px) {
    font-size: 3.8vw;
  }
`;
