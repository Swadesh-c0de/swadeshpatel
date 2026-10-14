export default function sitemap() {
  const baseUrl = "https://swadeshpatel.vercel.app";
  const routes = ["", "/about", "/projects", "/lab", "/contact"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
