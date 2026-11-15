import { socialLinks } from "@/data/socials";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${socialLinks.website}/sitemap.xml`,
  };
}
