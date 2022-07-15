import React from "react";
import Form from "./form";
import styled from "styled-components";
import "./index.css";
import Foot from "./foot";
export default function AboutUs({ color, txtColor, emailClr }) {
  const EmailOpen = (e) => {
    e.preventDefault();
    window.location.href = "mailto:filipvlkous@gmail.com";
  };

  const FooterContainer = styled.div`
    display: flex;
    padding: 10vw 10vw 0 10vw;
    @media (max-width: 600px) {
      flex-direction: column;
      padding: 0 15vw;
      padding-top: 5vw;
    }
  `;
  const TextContiner = styled.div`
    color: ${({ txtColor }) => (txtColor ? txtColor : `#000`)};
    padding-right: 3vw;
    #head {
      font-size: 2vw;
      margin: 0;
    }
    #txt {
      font-size: 1.2vw;
    }
    #email {
      font-size: 1.7vw;
      font-weight: 600;
      margin-bottom: 0;
    }
    @media (max-width: 600px) {
      padding-right: 0;
      #head {
        font-size: 3.5vw;
      }
      #txt {
        font-size: 3vw;
      }
      #email {
        font-size: 3.7vw;
        font-weight: 600;
        margin-bottom: 0;
      }
    }
  `;
  const Divider = styled.div`
    @media (max-width: 600px) {
      visibility: hidden;
    }
  `;

  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        paddingTop: "2vw",
        position: "relative",
        backgroundColor: null || color,
      }}
    >
      <Divider>
        <div className="custom-shape-divider-top-1654316600">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </Divider>

      <FooterContainer>
        <TextContiner txtColor={txtColor}>
          <p id="head">
            Chcete nové webové stránky, které budou dobře vypadat a budou dobře
            fungovat?
          </p>
          <p id="txt">
            Pokud máte na mysli nějaký projekt nebo se jen chcete dozvědět více,
            vyplňte prosím uvedený formulář a pojďme se pustit do práce!
          </p>
          <p id="email">
            Pro cokoliv jineho muzete napsat email{" "}
            <EmailBtn emailClr={emailClr} onClick={EmailOpen}>
              filipvlkous@gmail.com
            </EmailBtn>
          </p>
        </TextContiner>
        <Form txtColor={txtColor} />
      </FooterContainer>
      <Foot txtColor={txtColor} />
    </div>
  );
}

const EmailBtn = styled.a`
  font-size: 1.7vw;
  font-weight: 600;
  color: ${(props) => props.emailClr};
  cursor: pointer;
  transition: all 300ms;
  border-bottom: 3px solid transparent;
  @media (max-width: 600px) {
    font-size: 3.7vw;
  }

  &:hover {
    border-bottom-color: ${(props) => props.emailClr};
  }
`;
