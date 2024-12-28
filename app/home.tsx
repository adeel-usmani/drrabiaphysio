import './home.css';
import React from "react";
import Particles from "./components/particles";

export default function Home() {
  return (
    <div className="outerContainer">
      <div className="hiddenLine" />
      <Particles className="particles" quantity={500} />
      <h1 className="mainHeading">Dr Rabia pt</h1>
      {/* <p className="subHeading">Physiotherapist</p> */}
      <p className="subHeading">DPT | MS-WHPT | RIT</p>
    </div>
  );
}
