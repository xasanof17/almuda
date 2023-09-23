import { Contacts } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Almuda Company for inquiries, support, or collaboration. We're here to assist you.",
  abstract: "https://almudacompany.com/contact",
  openGraph: {
    title: "Contact - Almuda Company",
    description:
      "Contact Almuda Company for inquiries, support, or collaboration. We're here to assist you.",
    siteName: "almudacompany.com",
    url: "https://almudacompany.com/contact",
  },
};

export default function Contact() {
  return (
    <section
      id="contact"
      role="main"
      aria-label="Contact Almuda Company"
      className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8"
    >
      <Contacts />
    </section>
  );
}
