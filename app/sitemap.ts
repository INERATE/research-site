import type { MetadataRoute } from "next";

const BASE_URL = "https://research.inerate.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/acri"];

  return routes.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));
}
