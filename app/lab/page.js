import { pageMetadata } from "@/lib/metadata";
import LabClient from "./LabClient";

export const metadata = pageMetadata({
  title: "The Lab",
  description: "A digital playground of experimental configurations, dotfiles, shell scripts, and architectural artifacts by Swadesh Patel.",
  path: "/lab",
});

export default function LabPage() {
  return <LabClient />;
}
