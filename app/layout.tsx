import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer, Navbar } from "@/layouts";
import { Analytics, Phone } from "@/components";
import { keywords } from "@/meta";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  title: {
    default: "Almuda Company - Accounting Services",
    template: "%s - Almuda Company - Accounting Services",
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
    canonical: `${baseUrl}`,
  },
  manifest: `${baseUrl}/manifest.json`,
  publisher: "Hostinger",
  keywords: keywords,
  metadataBase: new URL(`${baseUrl}`),
  verification: {
    google: `${process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION}`,
    yandex: `${process.env.NEXT_PUBLIC_YANDEX_VERIFICATION}`,
    me: `${baseUrl}`,
  },
  referrer: "origin-when-cross-origin",
  openGraph: {
    type: "website",
    title: "Almuda Company",
    countryName: "Uzbekistan",
    description:
      "Quality, reliable and honest accounting services for your business. Start your business in Uzbekistan.",
    siteName: "almudacompany.com",
    url: `${baseUrl}`,
    emails: ["info@almudacompany.com", "xasanof17@gmail.com"],
    phoneNumbers: ["+998900198505", "+998900186644"],
    images: {
      url: "/og.png",
      type: "image/png",
      width: 400,
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
    <html lang="en" prefix="og:https://ogp.me/ns#">
      <head>
        <Analytics />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Phone />
        <Footer />
        <Toaster position="top-right" reverseOrder gutter={1.5} />
        <Analytics />
      </body>
    </html>
  );
}
