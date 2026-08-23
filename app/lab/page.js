import LabClient from "./LabClient";

export const metadata = {
  title: "The Lab",
  description: "A digital playground of experimental configurations, dotfiles, shell scripts, and architectural artifacts by Swadesh Patel.",
  openGraph: {
    title: "The Lab | Swadesh Patel",
    description: "A digital playground of experimental configurations, dotfiles, shell scripts, and architectural artifacts by Swadesh Patel.",
  }
};

export default function LabPage() {
  return <LabClient />;
}