import { Banner } from ".";
import { AboutCEO } from "./AboutCEO";
import WhatCanWeDo from "./WhatCanWeDo";
import AboutProvides from "./AboutProvides";
import CompanyMission from "./CompanyMission";

const About = () => {
  return (
    <div className="container flex flex-col items-center justify-center">
      <Banner title="About" text="Welcome to our About page" />
      <AboutCEO />
      <AboutProvides />
      <CompanyMission />
      <WhatCanWeDo />
    </div>
  );
};

export default About;
