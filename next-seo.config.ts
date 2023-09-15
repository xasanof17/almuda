import type { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
  defaultTitle: "Almuda - Start your business in Uzbekistan.",
  description:
    "Quality, reliable and honest accounting services for your business.",
  canonical: "https://almudacompany.com",
  openGraph: {
    type: "website",
    locale: "ua_RU",
    url: "https://almudacompany.com",
    siteName: "Almuda - Start your business in Uzbekistan.",
    description:
      "Quality, reliable and honest accounting services for your business.",
    images: [
      {
        url: "/opengraph-image.png",
        type: "image/png",
        width: 300,
      },
    ],
  },
  twitter: {
    handle: "@almuda",
    site: "@almuda",
    cardType: "summary_large_image",
  },
};
