import { socialLinks } from "@/data/socials";

export default function sitemap() {
  const baseUrl = socialLinks.website;
  const routes = ["", "/about", "/projects", "/lab", "/contact"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
