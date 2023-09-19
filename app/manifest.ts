import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Almuda Company",
    short_name: "Almuda Company",
    description:
      "Quality, reliable and honest accounting services for your business. Start your business in Uzbekistan.",
    start_url: "/",
    display: "browser",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
