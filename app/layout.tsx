import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer, Navbar } from "@/layouts";
import { Analytics, Phone } from "@/components";
import { keywords } from "@/meta";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "almudacompany.com",
    template: "%s | almudacompany.com",
  },
  generator: "Next.js",
  description:
    "Quality, reliable and honest accounting services for your business.",
  authors: [
    {
      name: "JX Team",
      url: "https://portfoliowebapp.vercel.app",
    },
  ],
  creator: "JX Team",
  abstract:
    "Quality, reliable and honest accounting services for your business.",
  applicationName: "almudacompany.com",
  alternates: {
    canonical: "https://almudacompany.com",
  },
  manifest: "https://almudacompany.com/manifest.json",
  publisher: "Hostinger",
  robots: "index, follow",
  keywords: keywords,
  openGraph: {
    type: "website",
    title: "Almuda Company",
    countryName: "Uzbekistan",
    description:
      "Quality, reliable and honest accounting services for your business. Start your business in Uzbekistan.",
    siteName: "www.almudacompany.com",
    url: "www.almudacompany.com",
    emails: ["info@almuda.uz", "xasanof17@gmail.com"],
    phoneNumbers: ["+998900198505"],
  },
  icons: {
    shortcut: "/icon.svg",
    icon: "/icon.svg",
    apple: "/apple-icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Analytics />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Phone />
        <Footer />
        <Toaster position="top-right" reverseOrder gutter={1.5} />
      </body>
    </html>
  );
}
