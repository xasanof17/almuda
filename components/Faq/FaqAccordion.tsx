"use client";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useState } from "react";
import { FaqData } from "@/types";

const variants = {
  accordion:
    "flex flex-col rounded-xl border p-3 transition-all duration-300 hover:cursor-pointer sm:p-4",
  btn: "flex items-center justify-center rounded-full bg-primary/20 p-2 md:p-3",
  accordionText:
    "pt-5 text-[15px] tracking-wide text-gray-800 transition-all duration-150 md:text-lg",
};

const FaqAccordion = ({ faqData }: { faqData: FaqData }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div
      role="region"
      aria-labelledby={`faq-question`}
      aria-expanded={isExpanded}
      className={`${variants.accordion} ${isExpanded ? "bg-slate-50" : ""}`}
    >
      <div
        tabIndex={0}
        role="accordion-heading"
        aria-label="accordion-heading"
        className="flex items-center justify-between"
      >
        <h2
          title={faqData.question}
          className={`${
            !isExpanded ? "truncate" : ""
          } text-base font-medium text-primary md:text-xl`}
        >
          {faqData.question}
        </h2>
        <button
          aria-label={`Toggle ${isExpanded ? "Collapse" : "Expand"}`}
          tabIndex={-1}
          className={variants.btn}
          onClick={() => setIsExpanded((prev) => !prev)}
          aria-labelledby="accordion-heading"
          id="accordion-content"
        >
          {isExpanded ? (
            <BsChevronUp className="text-xl text-primary" />
          ) : (
            <BsChevronDown className="text-xl" />
          )}
        </button>
      </div>
      {isExpanded && (
        <div
          role="region"
          aria-labelledby="accordion-heading"
          id="accordion-content"
        >
          <p
            role="accordion-text"
            aria-expanded={isExpanded ? "true" : "false"}
            aria-label="accordion-text"
            aria-roledescription="accordion-text"
            title={faqData.answer}
            aria-description={faqData.answer}
            aria-describedby={faqData.answer}
            className={variants.accordionText}
          >
            {faqData.answer}
          </p>
        </div>
      )}
    </div>
  );
};

export default FaqAccordion;
