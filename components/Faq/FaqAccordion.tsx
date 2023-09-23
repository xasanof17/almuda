"use client";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useState } from "react";
import { FaqData } from "@/types";

const FaqAccordion = ({ faqData }: { faqData: FaqData }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      role="region"
      aria-labelledby={`faq-question`}
      aria-expanded={open}
      className={`flex flex-col rounded-xl border p-3 transition-all duration-300 hover:cursor-pointer sm:p-4 ${
        open ? "bg-slate-50" : ""
      }`}
    >
      <div
        tabIndex={0}
        role="button"
        aria-label="accordion-button"
        className="flex items-center justify-between"
      >
        <h2
          title={faqData.question}
          className={`${
            !open ? "truncate" : ""
          } text-base font-medium text-primary md:text-xl`}
        >
          {faqData.question}
        </h2>
        <button
          aria-label={`Toggle ${open ? "Collapse" : "Expand"}`}
          tabIndex={-1}
          className="flex items-center justify-center rounded-full bg-primary/20 p-2 md:p-3"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? (
            <BsChevronUp className="text-xl text-primary" />
          ) : (
            <BsChevronDown className="text-xl" />
          )}
        </button>
      </div>
      {open && (
        <p
          role="accordion-text"
          aria-expanded={open ? "true" : "false"}
          aria-label="accordion-text"
          aria-roledescription="accordion-text"
          title={faqData.answer}
          aria-description={faqData.answer}
          aria-describedby={faqData.answer}
          className="pt-5 text-[15px] tracking-wide text-gray-800 transition-all duration-150 md:text-lg"
        >
          {faqData.answer}
        </p>
      )}
    </div>
  );
};

export default FaqAccordion;
