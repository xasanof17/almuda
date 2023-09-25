import { Banner, WhyAlmuda } from "..";
import { AboutCEO } from "./AboutCEO";
import WhatCanWeDo from "../WhatCanWeDo";
import AboutProvides from "./AboutProvides";
import CompanyMission from "./CompanyMission";
import RunningBusiness from "./RunningBusiness";
import TypesCompanies from "./TypesCompanies";

const About = () => {
  return (
    <div
      role="banner"
      className="container flex flex-col items-center justify-center"
    >
      <Banner title="About" text="Welcome to our About page" />
      <AboutCEO />
      <AboutProvides />
      <CompanyMission />
      <TypesCompanies />
      <WhatCanWeDo text />
      <RunningBusiness />
      <WhyAlmuda />
    </div>
  );
};

export default About;
