import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { motion } from "framer-motion";
export default function ContactUs({ txtColor }) {
  const form = useRef();
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "DreamDesign_service",
        "template_mlqfthb",
        form.current,
        "user_bwXhZ3P0vFP8RTBjZA0qJ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  }

  return (
    <form
      className="contact-form"
      ref={form}
      onSubmit={sendEmail}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Container>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            //paddingRight: 10,
          }}
        >
          <Input type="text" name="fName" placeholder={"Jméno"} required />
          <Input type="text" name="lName" placeholder={"Prijmeni"} required />

          <Input
            type="tel"
            name="number"
            placeholder={"Telefon"}
            pattern={"[0-9]{3}[0-9]{3}[0-9]{3}"}
          />
          <Input type="email" name="email" placeholder={"Email"} required />
        </div>

        <Text name="message" placeholder={"Text..."} required minLength={8} />
      </Container>

      <SendBtn
        initial="rest"
        animate="rest"
        whileHover="hover"
        type="submit"
        inputColor={txtColor}
      >
        <div>Odeslat</div>
        <motion.div
          style={{ fontSize: "3vw", paddingLeft: "0.2vw" }}
          variants={shapeMotion}
        >
          {">"}
        </motion.div>
      </SendBtn>
    </form>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 45vw;
  @media (max-width: 600px) {
    flex-direction: column;
    width: 65vw;
  }
`;

const shapeMotion = {
  rest: {
    x: 0,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeIn",
    },
  },
  hover: {
    x: 20,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
};

const Input = styled.input`
  font-family: Poppins;
  width: 100%;
  padding: 0.8vw 1.2vw;
  margin: 0.5vw 0;
  display: inline-block;
  border: 2px solid #ccc;
  border-radius: 0.5vw;
  box-sizing: border-box;
  transition: 200ms;
  font-size: 1vw;
  &:focus {
    margin: 0.5vw -0.2vw;
    border: 2px solid #555;
    outline: none;
    overflow: visible;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  @media (max-width: 600px) {
    padding: 2.8vw 1.2vw;
    font-size: 3vw;
    border-radius: 1vw;
  }
`;

const Text = styled.textarea`
  font-family: Poppins;
  width: 100%;
  padding: 0.8vw 1.2vw;
  margin: 0.5vw 0;
  margin-left: 0.5vw;
  display: inline-block;
  border: 2px solid #ccc;
  border-radius: 0.7vw;
  box-sizing: border-box;
  transition: 200ms;
  resize: none;
  font-size: 1vw;
  &:focus {
    border: 2px solid #555;
    outline: none;
    margin: -0.04vw 0;
    margin-left: 0.5vw;

    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  @media (max-width: 600px) {
    font-size: 3vw;
    border-radius: 1vw;
    height: 30vw;
  }
`;
const SendBtn = styled(motion.button)`
  display: flex;
  font-size: 1.5vw;
  align-items: center;
  background: none;
  border: none;
  font-family: Poppins;
  font-weight: 600;
  color: ${(props) => props.inputColor || "#000"};
  cursor: pointer;
  @media (max-width: 600px) {
    font-size: 4vw;
  }
`;
