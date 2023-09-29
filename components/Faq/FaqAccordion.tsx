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
    <div className={`${variants.accordion} ${isExpanded ? "bg-slate-50" : ""}`}>
      <div tabIndex={0} className="flex items-center justify-between">
        <h2
          title={faqData.question}
          className={`${
            !isExpanded ? "truncate" : ""
          } text-base font-medium text-primary md:text-xl`}
        >
          {faqData.question}
        </h2>
        <button
          type="button"
          title="toggle"
          className={variants.btn}
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          {isExpanded ? (
            <BsChevronUp className="text-xl text-primary" />
          ) : (
            <BsChevronDown className="text-xl" />
          )}
        </button>
      </div>
      {isExpanded && (
        <div id="accordion-content">
          <p
            role="accordion-text"
            aria-label="accordion-text"
            title={faqData.answer}
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
