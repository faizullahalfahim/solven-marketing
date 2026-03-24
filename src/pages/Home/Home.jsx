import React from "react";
import Banner from "./Banner/Banner";
import Service from "./Service/Service";

import About from "../About/About";
import Contract from "../Contract/Contract";
import MySkills from "./OurWork/Proof";
import MyProject from "./Proof/MyProject";
import Proof from "./OurWork/Proof";

const Home = () => {
  return (
    <main className="bg-base-100">
      <Banner /> 


      <div className="space-y-0">
        <Service />
        <Proof> </Proof>

        

        <Contract />
      </div>
    </main>
  );
};

export default Home;
