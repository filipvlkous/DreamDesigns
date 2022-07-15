import React, { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import seo from "../../../img/home/naseSluzby/seo.svg";
import design from "../../../img/home/naseSluzby/design.svg";
import ecommers from "../../../img/home/naseSluzby/ecommers.svg";
import vyvoj from "../../../img/home/naseSluzby/vyvoj.svg";
import styled from "styled-components";
import useWindowDimensions from "../../../getDimension";
const UlContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0;
  border-radius: 1vw;
  justify-content: center;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    border-radius: 0.5vw;
  }
`;

const RowText = styled.p`
  font-size: 3vw;
  width: 100%;
  color: #818181;
  border-radius: 10;
  margin-top: 2vw;
  font-size: 1vw;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 3.7vw;
  }
`;

const LiContainer = styled(motion.div)`
  cursor: pointer;
  background-color: #fff;
  overflow: hidden;
  padding: 1vw;
  justify-content: center;
  align-items: center;
  border-radius: 1.1vw;
  margin: 1vw;
  box-shadow: rgba(100, 100, 111, 0.1) 0px 0.6vw 1.8vw 0px;
  width: 17vw;
  transition: box-shadow 400ms;
  :hover {
    box-shadow: rgba(100, 100, 111, 0.3) 0px 0.6vw 1.8vw 0px;
  }
  @media (max-width: 600px) {
    width: 70vw;
    padding: 4vw;
    margin: 2vw;
  }
`;

const BoldText = styled(motion.h4)`
  color: black;
  font-weight: 500;
  font-size: 1.4vw;
  line-height: 1.3em;
  padding: 0 0 0.7vw 0.7vw;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 5vw;
  }
`;

export default function App() {
  const { width } = useWindowDimensions();
  return (
    <div
      style={{
        padding: 0,
        zIndex: 10,
        position: "relative",
        display: "flex",
      }}
    >
      {width >= 600 ? (
        <AnimateSharedLayout>
          <UlContainer layout initial={{ borderRadius: 25 }}>
            {items.map((item, index) => (
              <div key={index}>
                <Item key={index} item={item} />
              </div>
            ))}
          </UlContainer>
        </AnimateSharedLayout>
      ) : (
        <UlContainer>
          {items.map((item, index) => (
            <MobilItem key={index} item={item} />
          ))}
        </UlContainer>
      )}
    </div>
  );
}

function Item({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <LiContainer
      layout
      initial={{ borderRadius: 10 }}
      onHoverStart={() => setIsOpen(true)}
      onHoverEnd={() => setIsOpen(false)}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        {item.img && (
          <motion.img
            layout
            src={item.img}
            style={{ height: "4vw", zIndex: 100 }}
            alt={item.alt}
          />
        )}
        <BoldText layout>{item.name}</BoldText>
      </div>
      <AnimatePresence>
        {isOpen && <Content>{item.txt}</Content>}
      </AnimatePresence>
    </LiContainer>
  );
}

function Content({ children }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <RowText>{children}</RowText>
    </motion.div>
  );
}

function MobilItem({ item }) {
  return (
    <LiContainer initial={{ borderRadius: 10 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        {item.img && (
          <motion.img
            layout
            src={item.img}
            style={{ height: "14vw", zIndex: 100 }}
            alt={item.alt}
          />
        )}
        <BoldText>{item.name}</BoldText>
      </div>
      <RowText>{item.txt}</RowText>
    </LiContainer>
  );
}
const items = [
  {
    img: seo,
    alt: "Google optimalizace a SEO",
    key: 0,
    name: "Rozšiřte svůj dosah, SEO",
    txt: "Specializujeme se na to, aby se firmám dařilo v oblasti sociálních sítí. Díky správnému marketingu a výzkumu se váš dosah pomocí sociálních sítí mnohonásobně zvýší.",
  },
  {
    img: vyvoj,
    alt: "vývoj aplikací a webů",
    key: 1,
    name: "Web & Mobile Vývoj",
    txt: "Naši agilní vývojáři webových i mobilních aplikací, vytvářejí, testují, nasazují a podporují vlastní řešení, od klasického webu přes nativní a hybridní mobilní aplikace pro iOS a Android až po e-shopy dělané přímo na míru.",
  },
  {
    img: design,
    alt: "UX/UI a celkový design a branding",
    key: 2,
    name: "Designové myšlení,UX/UI",
    txt: "Nabízíme profesionální služby webdesignu, které pomohou vaší firmě přilákat více návštěvníků a udržet je na vašich stránkách! Náš vysoce kvalifikovaný tým designérů testuje, realizuje a vytváří úžasné webové stránky.",
  },
  {
    img: ecommers,
    alt: "Ecommers a eshop",
    key: 3,
    name: "E-commers, E-shopy",
    txt: "Používáme cílené strategie, které generují maximální návratnost investic a zvyšují návštěvnost vašich webových stránek. Pomáháme ambiciózním firmám generovat vyšší zisky budováním povědomí a zvyšováním návštěvnosti webu.",
  },
];
