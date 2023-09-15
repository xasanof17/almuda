import { About } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About our company",
  abstract: "https://www.almudacompany.com/about",
  openGraph: {
    title: "About | almudacompany.com",
    description: "About our company",
    siteName: "www.almudacompany.com",
    url: "https://almudacompany.com/about",
  },
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
