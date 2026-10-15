import ProjectsClient from "./ProjectsClient";

export const metadata = {
  title: "Selected Work",
  description: "A showcase of high-performance web applications, decentralized protocols, terminal tools, and system architecture by Swadesh Patel.",
  openGraph: {
    title: "Selected Work | Swadesh Patel",
    description: "A showcase of high-performance web applications, decentralized protocols, terminal tools, and system architecture by Swadesh Patel.",
    url: "/projects",
    siteName: "Swadesh Patel Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
