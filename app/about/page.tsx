import { About } from "@/components";
import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Almuda Company's journey in the realm of accounting. Uncover our commitment to precision, operational efficiency, and financial excellence. We are the trusted partner of businesses and individuals for all their accounting requirements.",
  abstract:
    "Learn about Almuda Company's journey in the realm of accounting. Uncover our commitment to precision, operational efficiency, and financial excellence. We are the trusted partner of businesses and individuals for all their accounting requirements.",
  keywords: ["almuad information", "about almuda", "about"],
  alternates: {
    canonical: `${baseUrl}/about`,
  },
  openGraph: {
    title: "About - Almuda Company",
    description:
      "Explore Almuda's journey in the world of accounting. Discover our dedication to precision, efficiency, and financial excellence. Trusted by businesses and individuals alike for all their accounting needs.",
    siteName: "almudacompany.com",
    url: `${baseUrl}/about`,
    images: [
      {
        url: `${baseUrl}/og.png`,
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <section
      id="about"
      role="main"
      aria-label="About Our Company"
      className="my-20"
    >
      <About />
    </section>
  );
}
