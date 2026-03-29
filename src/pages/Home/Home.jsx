import React from "react";
import Banner from "./Banner/Hero";

import Marquee from "./Banner/Marquee/Marquee";
import Pain from "../../components/Pain/Pain";
import Services from "./Services/Services";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import About from "../About/About";
import Contact from "../Contract/Contract";

const Home = () => {
  return (
    <main className="bg-base-100">
      <Banner /> 
      <Marquee> </Marquee>
      <Pain> </Pain>
      <Services />
      <HowItWorks> </HowItWorks>
      <About> </About>
      <Contact> </Contact>
      


    </main>
  );
};

export default Home;
