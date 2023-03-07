import React from "react";

import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import SectionFive from "./components/SectionFive";
import SectionSix from "./components/SectionSix";
import SectionSeven from "./components/SectionSeven";
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <div className="2xl:mx-[15rem]">
      <NavBar />
      <HeroSection />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <FooterSection />
    </div>
  );
}

export default App;
