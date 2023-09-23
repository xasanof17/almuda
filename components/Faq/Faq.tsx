import { faqData } from "@/constants";
import { Banner } from "..";
import FaqAccordion from "./FaqAccordion";

const Faq = () => {
  return (
    <>
      <Banner title="FAQ" text="Welcome to our FAQ page" />
      <div
        role="main"
        aria-label="Frequently Asked Questions"
        className="flex flex-col space-y-4 py-20"
      >
        {faqData.map((faq, index) => (
          <FaqAccordion key={index} faqData={faq} />
        ))}
      </div>
    </>
  );
};

export default Faq;
