import AboutClient from "./AboutClient";

export const metadata = {
  title: "About",
  description: "About Swadesh Patel — Computer Science student with a deep-seated passion for Linux, Robotics, and AI.",
  openGraph: {
    title: "About | Swadesh Patel",
    description: "About Swadesh Patel — Computer Science student with a deep-seated passion for Linux, Robotics, and AI.",
    url: "/about",
    siteName: "Swadesh Patel Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}