import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://akshaychandran.dev", lastModified: new Date() },
    { url: "https://akshaychandran.dev/#projects", lastModified: new Date() },
    { url: "https://akshaychandran.dev/#contact", lastModified: new Date() }
  ];
}
