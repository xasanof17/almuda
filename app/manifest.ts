import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Almuda Company - Accounting Services",
    short_name: "Almuda Company",
    description:
      "Quality, reliable and honest accounting services for your business. Start your business in Uzbekistan.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/apple-icon.svg",
        sizes: "16x16",
        type: "image/svg+xml",
      },
      {
        src: "/favicon.ico",
        sizes: "16x16",
        type: "image/ico",
      },
    ],
  };
}
