import AboutClient from "./AboutClient";

export const metadata = {
  title: "About",
  description: "About Swadesh Patel — Computer Science student with a deep-seated passion for Linux, Robotics, and AI.",
  openGraph: {
    title: "About | Swadesh Patel",
    description: "About Swadesh Patel — Computer Science student with a deep-seated passion for Linux, Robotics, and AI.",
  }
};

export default function AboutPage() {
  return <AboutClient />;
}