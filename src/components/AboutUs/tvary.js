import React from "react";
import trojuhelnik from "../../img/sluzby/trojuhelnik.svg";
import kruh from "../../img/sluzby/kolo.svg";
import ctverec from "../../img/sluzby/ctverec.svg";
import { Parallax } from "react-scroll-parallax";

export default function tvary() {
  return (
    <div
      style={{
        zIndex: 21,
        display: "flex",
        alignItems: "center",
        position: "absolute",
        justifyContent: "flex-end",
        width: "100%",
        paddingTop: "30%",
      }}
    >
      <div
        style={{
          position: "absolute",
          right: "25%",
          width: "20%",
          height: "auto",
        }}
      >
        <Parallax y={["22%", "-42%"]}>
          <img
            src={trojuhelnik}
            style={{ width: "100%", height: "auto" }}
            alt={"triangle"}
          />
        </Parallax>
      </div>
      <div
        style={{
          right: "15%",
          top: "40%",
          position: "absolute",
          width: "20%",
          height: "auto",
        }}
      >
        <Parallax y={["120%", "-100%"]}>
          <img
            src={kruh}
            style={{ width: "100%", height: "auto" }}
            alt={"circle"}
          />
        </Parallax>
      </div>

      <div
        style={{
          right: "2%",
          width: "20%",
          height: "auto",
          top: "80%",
          position: "absolute",
        }}
      >
        <Parallax y={["60%", "-80%"]}>
          <img
            src={ctverec}
            style={{ width: "100%", height: "auto" }}
            alt={"square"}
          />
        </Parallax>
      </div>
    </div>
  );
}
