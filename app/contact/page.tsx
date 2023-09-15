import { Contacts } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact to our company",
  abstract: "https://www.almudacompany.com/contact",
  openGraph: {
    title: "Contact | almudacompany.com",
    description: "Contact our company",
    siteName: "www.almudacompany.com",
    url: "https://almudacompany.com/contact",
  },
};

export default function Contact() {
  return (
    <section className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <Contacts />
    </section>
  );
}
