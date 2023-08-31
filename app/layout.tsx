import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer, Navbar } from "@/layouts";
import { Analytics, Phone } from "@/components";
import { keywords } from "@/meta";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Almuda - Start Your Business in the Uzbekistan.",
    template: "%s | Almuda",
  },
  generator: "Next.js",
  description:
    "Quality, reliable and honest accounting services for your business.",
  authors: [
    {
      name: "Xasanov Javohir",
      url: "https://portfoliowebapp.vercel.app",
    },
  ],
  keywords: keywords,
  // robots: {
  //   index: false,
  //   follow: true,
  //   nocache: true,
  //   googleBot: {
  //     index: true,
  //     follow: false,
  //     noimageindex: true,
  //     "max-video-preview": -1,
  //     "max-image-preview": "large",
  //     "max-snippet": -1,
  //   },
  // },
  // metadataBase: new URL(`${process.env.VERCEL_URL}`),
  applicationName: "Almuda",
  category: "accounting website",
  creator: "Xasanov Javohir",
  publisher: "Xasanov Javohir",
  // openGraph: {
  //   type: "website",
  //   countryName: "Uzbekistan",
  //   emails: ["info@almuda.uz", "xasanof17@gmail.com"],
  //   description: "Start Your Business in the Uzbekistan.",
  //   phoneNumbers: ["+998900186644", "+998900198505"],
  //   siteName: "Almuda",
  //   title: "Almuda",
  //   url: "https://almuda.vercel.app",
  //   images: "/vercel.svg",
  // },
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
      </body>
    </html>
  );
}
