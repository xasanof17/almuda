import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "almudacompany.com",
    short_name: "almudacompany.com",
    description:
      "Quality, reliable and honest accounting services for your business.",
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
