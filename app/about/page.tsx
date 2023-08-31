import { About } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About our company",
};

export default function AboutPage() {
  return (
    <section id="about" className="my-20">
      <div className="container">
        <About />
      </div>
    </section>
  );
}
