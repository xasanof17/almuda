import type { Metadata } from "next";
import { Faq } from "@/components";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Explore the frequently asked questions (FAQs) of Almuda Company. Find answers to common inquiries about our services, products, and more.",
  abstract: "https://almudacompany.com/faq",
  openGraph: {
    title: "Frequently Asked Questions - Almuda Company",
    description:
      "Discover the frequently asked questions (FAQs) of Almuda Company. Get answers to common queries about our services, products, and more.",
    siteName: "almudacompany.com",
    url: "https://almudacompany.com/faq",
  },
};

export default function FaqPage() {
  return (
    <section
      id="faq"
      role="main"
      aria-label="Frequently Asked Questions at Almuda Company"
      className="my-20"
    >
      <div className="container">
        <Faq />
      </div>
    </section>
  );
}
