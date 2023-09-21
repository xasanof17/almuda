import { FaqData } from "@/types";
import { Banner } from "..";
import FaqAccordion from "./FaqAccordion";

const faqItems = [
  {
    question: "Can I establish a business in Dubai without a residence permit?",
    answer:
      "Similar to mainland UAE company registration, the size of the office or workspace is taken into account when granting a residency. Since office space is not necessary for the foundation of an offshore company, a residency is not required.",
  },
  {
    question: "Can I establish a business in Dubai without a residence permit?",
    answer:
      "Similar to mainland UAE company registration, the size of the office or workspace is taken into account when granting a residency. Since office space is not necessary for the foundation of an offshore company, a residency is not required.",
  },
];

const Faq = () => {
  return (
    <>
      <Banner title="FAQ" text="Welcome to our FAQ page" />

      <div className="flex flex-col space-y-4 py-20">
        {faqItems.map((faq, index) => (
          <FaqAccordion key={index} faqData={faq} />
        ))}
      </div>
    </>
  );
};

export default Faq;
