import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/layouts";
import { Phone } from "@/components";
import { keywords } from "@/meta";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Almuda",
  description: "Generated by create next app",
  authors: [
    {
      name: "Xasanov Javohir",
      url: "https://portfoliowebapp.vercel.app",
    },
  ],
  keywords: keywords,
  robots: "index, follow",
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
        {/* <Footer /> */}
      </body>
    </html>
  );
}
