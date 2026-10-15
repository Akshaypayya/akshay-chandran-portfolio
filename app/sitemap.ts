import type { MetadataRoute } from "next";
import { projects } from "../data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://akshay-chandran-portfolio.vercel.app";
  const projectUrls = projects.map(p => ({
    url: `${baseUrl}/projects/${p.slug}`,
    lastModified: new Date()
  }));

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/#projects`, lastModified: new Date() },
    { url: `${baseUrl}/#skills`, lastModified: new Date() },
    { url: `${baseUrl}/#experience`, lastModified: new Date() },
    { url: `${baseUrl}/#contact`, lastModified: new Date() },
    ...projectUrls
  ];
}
