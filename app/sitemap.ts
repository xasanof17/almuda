import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  // Define your routes here
  const routes: string[] = [
    "/",
    "/about",
    "/careers",
    "/contact",
    // Add more routes as needed
  ];

  // Generate the sitemap data
  const sitemap: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  return sitemap;
}
