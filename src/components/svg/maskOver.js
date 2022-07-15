import React from "react";
import bgImg from "../../img/sluzby/bg_header.jpg";
export default function MaskOver() {
  return (
    <div style={{ position: "absolute", height: 250, top: 0 }}>
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="669px"
        height="828px"
        viewBox="0 0 669 828"
      >
        <mask id="mask">
          <g id="Page-1">
            <g id="Home-DL" transform="translate(-771.000000, 0.000000)">
              <g id="hero" transform="translate(87.000000, -225.000000)">
                <g id="img" transform="translate(684.000000, 0.000000)">
                  <g id="shot_dribbble">
                    <g
                      id="Mask"
                      transform="translate(470.000000, 526.500000) scale(-1, 1) translate(-470.000000, -526.500000) "
                    >
                      <path
                        id="path-1_1_"
                        d="M0,940.4c0,62.2,50.7,112.6,113.3,112.6h279.3C716.3,1053,940,825.9,940,529.5
							C940,230.2,716.3,0,392.6,0H113.3C50.7,0,0,50.4,0,112.6V940.4z"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </mask>
        <img src={bgImg} mask="url(#mask)" />
      </svg>
    </div>
  );
}
