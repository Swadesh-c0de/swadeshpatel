import { pageMetadata } from "@/lib/metadata";
import AboutClient from "./AboutClient";

export const metadata = pageMetadata({
  title: "About",
  description: "About Swadesh Patel — Computer Science student with a deep-seated passion for Linux, Robotics, and AI.",
  path: "/about",
});

export const revalidate = 86400;

export default function AboutPage() {
  const today = new Date();
  const birthdayPassed = today.getUTCMonth() > 0 || today.getUTCDate() >= 10;
  const age = today.getUTCFullYear() - 2005 - (birthdayPassed ? 0 : 1);
  return <AboutClient age={age} />;
}