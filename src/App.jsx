import { useState } from "react";
import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import HowToBuy from "./components/HowToBuy";
import Tokenomics from "./components/Tokenomics";
import RoadMap from "./components/RoadMap";
import Faq from "./components/Faq";

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <HowToBuy />
      <Tokenomics />
      <RoadMap />
      <Faq/>
    </>
  );
}

export default App;
