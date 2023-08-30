import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer, Navbar } from "@/layouts";
import { Phone } from "@/components";
import { keywords } from "@/meta";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Almuda - Start Your Business in the Uzbekistan.",

  description:
    "Quality, reliable and honest accounting services for your business.",
  authors: [
    {
      name: "Xasanov Javohir",
      url: "https://portfoliowebapp.vercel.app",
    },
  ],
  keywords: keywords,
  robots: {
    index: true,
    follow: true,
    notranslate: true,
    googleBot:
      "index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1",
  },
  applicationName: "Almuda",
  category: "Accounting",
  creator: "Xasanov Javohir",
  publisher: "Vercel",
  openGraph: {
    type: "website",
    countryName: "Uzbekistan",
    emails: ["info@almuda.uz", "xasanof17@gmail.com"],
    description: "Start Your Business in the Uzbekistan.",
    phoneNumbers: ["+998900186644", "+998900198505"],
    siteName: "Almuda",
    title: "Almuda",
    url: "https://almuda.vercel.app",
    images: "https://almuda.vercel.app/_next/static/media/hero.34afdfe3.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Phone />
        <Footer />
        <Script
          src="https://beamanalytics.b-cdn.net/beam.min.js"
          data-token="a919f42e-13a4-4e1c-aeea-4fb82c70b949"
          async
        />
      </body>
    </html>
  );
}
