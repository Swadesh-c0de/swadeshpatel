import { pageMetadata } from "@/lib/metadata";
import ProjectsClient from "./ProjectsClient";

export const metadata = pageMetadata({
  title: "Selected Work",
  description: "A showcase of high-performance web applications, decentralized protocols, terminal tools, and system architecture by Swadesh Patel.",
  path: "/projects",
});

export default function ProjectsPage() {
  return <ProjectsClient />;
}
