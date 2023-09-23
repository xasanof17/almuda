import type { Metadata } from "next";
import { Careers } from "@/components";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Explore exciting career opportunities at Almuda. Join us and be part of a dynamic team committed to excellence.",
  abstract: "https://almudacompany.com/careers",
  openGraph: {
    title: "Careers - Almuda Company",
    description:
      "Join Almuda - Your path to a rewarding career. Explore our job openings and join our team",
    siteName: "almudacompany.com",
    url: "https://almudacompany.com/careers",
  },
};

export default function CareersPage() {
  return (
    <section
      id="careers"
      role="main"
      aria-label="Careers at Almuda"
      className="my-20"
    >
      <div className="container">
        <Careers />
      </div>
    </section>
  );
}
