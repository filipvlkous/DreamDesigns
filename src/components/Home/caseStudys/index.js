import React from "react";
import Vozickov from "./vozickov";
import SupPrague from "./supPrague";
import Prague from "./prague";
export default function CaseStudys({ refMy }) {
  return (
    <div
      ref={refMy}
      id="caseStudy"
      style={{
        width: "100%",
        backgroundColor: "#fff",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Vozickov />
      <SupPrague />
      <Prague />
    </div>
  );
}
