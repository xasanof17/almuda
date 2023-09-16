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
  keywords: keywords,
  metadataBase: new URL("https://almudacompany.com"),
  verification: {
    google:
      "google-site-verification=uyYXlCrcokD1MeNuwaj9tMJVFJfd11f7d5-9HRtsaG0",
    yandex: "3cea10c7008b5c14",
    
    me: "https://almudacompany.com",
  },
  referrer: "origin-when-cross-origin",
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
    images: {
      url: "/opengraph-image.png",
      type: "image/png",
      width: 300,
      height: 400,
    },
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  themeColor: "white",
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
