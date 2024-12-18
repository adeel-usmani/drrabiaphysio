import './page.css';
import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

// const navigation = [
//   { name: "Projects", href: "/projects" },
//   { name: "Contact", href: "/contact" },
// ];

export default function Home() {
  return (
    <div className="outerContainer">
      <div className="hiddenLine" />
      <Particles className="particles" quantity={100} />
      <h1 className="mainHeading">Dr Rabia</h1>
      <p className="subHeading">DPT | MS-WHPT | RIT</p>
    </div>
  );
}
