"use client";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useState } from "react";
import { FaqData } from "@/types";

const FaqAccordion = ({ faqData }: { faqData: FaqData }) => {
  const [open, setOpen] = useState(false);

  const toggleAccordion = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div
      className={`flex flex-col rounded-xl border p-3 transition-all duration-300 hover:cursor-pointer sm:p-5 ${
        open ? "bg-slate-100" : ""
      }`}
      onClick={toggleAccordion}
    >
      <div className="flex items-center justify-between">
        <h2
          className={`${
            !open ? "truncate" : ""
          } text-base font-medium text-primary md:text-lg`}
        >
          {faqData.question}
        </h2>
        <button onClick={toggleAccordion}>
          {open ? (
            <BsChevronUp className="text-xl text-primary" />
          ) : (
            <BsChevronDown className="text-xl" />
          )}
        </button>
      </div>
      {open && (
        <p className="pt-5 text-[15px] text-gray-500 transition-all duration-150 md:text-base">
          {faqData.answer}
        </p>
      )}
    </div>
  );
};

export default FaqAccordion;
