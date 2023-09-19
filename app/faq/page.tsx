import type { Metadata } from "next";
import { Faq } from "@/components";

export const metadata: Metadata = {
  title: "Faq",
  description: "FAQ of our company",
  abstract: "https://www.almudacompany.com/faq",
  openGraph: {
    title: "Faq | almudacompany.com",
    description: "Faq our company",
    siteName: "www.almudacompany.com",
    url: "https://almudacompany.com/faq",
  },
};

export default function FaqPage() {
  return (
    <section id="faq" className="my-20">
      <div className="container">
        <Faq />
      </div>
    </section>
  );
}
