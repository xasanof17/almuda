import { Banner } from "..";
import { AboutCEO } from "./AboutCEO";
import WhatCanWeDo from "../WhatCanWeDo";
import AboutProvides from "./AboutProvides";
import CompanyMission from "./CompanyMission";
import RunningBusiness from "./RunningBusiness";
import TypesCompanies from "./TypesCompanies";
import WhyAlmuda from "./WhyAlmuda";

const data = [
  {
    title: "UZBEKISTAN OFFICIAL REGISTRY EXTRAT",
    text: `A registry extract is a summary of information obtained directly
    from the official company registry at the relevant jurisdiction
    detailing the current particulars of a subject company. The content
    and detail provided in official extracts can vary based on the
    information available to the public for the subject entity. Registry
    Extracts are provided in varying formats depending on the country of
    origin and can include official documents in the local language.`,
  },
  {
    title: "UZBEKISTAN CREDIT REPORT",
    text: `A summary report showing a subject companys basic details,
    credentials and business background including contact details and
    management and available financial information. This report will
    also show any adverse or negative information for the subject. The
    information available will vary between jurisdictions as to local
    availability`,
  },
  {
    title: "UZBEKISTAN CORPORATE PROFILE REPORT",
    text: `Profile report Verification of the available company registration
    details, description and contact information of a subject entity.
    Due to the varying disclosure requirements between jurisdictions the
    content of a profile report may differ. Profile reports are usually
    supplied on our formal company header but may sometimes be provided
    in varying formats depending upon the requested country of
    registration.`,
  },
  {
    title: "UZBEKISTAN COMPANY NAME SEARCH",
    text: `Confirmation that a company name exists at a corporate registry in
    the given jurisdiction`,
  },
];

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
      <div className="flex flex-col">
        <h2 role="heading" className="title mb-5 capitalize">
          Uzbekistan business information services
        </h2>
        {data.map(({ title, text }, i) => (
          <div key={i} className="my-3">
            <h3
              aria-label={title}
              role="heading"
              className="text-center text-base font-bold text-primary/90 md:text-lg"
            >
              {title}
            </h3>
            <p
              aria-label={text}
              role="textbox"
              className="text-justify text-base font-medium text-primary/80"
            >
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
