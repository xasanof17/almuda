import { Contacts } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacts",
  description: "Contact to our company",
};

export default function Contact() {
  return (
    <section className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <Contacts />
    </section>
  );
}
