import type { Metadata } from "next";
import { Careers } from "@/components";

export const metadata: Metadata = {
  title: "Careers",
  description: "Careers of our company",
};

export default function CareersPage() {
  return (
    <section id="careers" className="my-20">
      <div className="container">
        <Careers />
      </div>
    </section>
  );
}
