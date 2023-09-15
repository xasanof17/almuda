import type { Metadata } from "next";
import { Careers } from "@/components";

export const metadata: Metadata = {
  title: "Careers",
  description: "Careers of our company",
  abstract: "https://www.almudacompany.com/careers",
  openGraph: {
    title: "Careers | almudacompany.com",
    description: "Careers our company",
    siteName: "www.almudacompany.com",
    url: "https://almudacompany.com/careers",
  },
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
