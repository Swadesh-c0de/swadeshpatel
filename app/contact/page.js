import { pageMetadata } from "@/lib/metadata";
import ContactClient from "./ContactClient";

export const metadata = pageMetadata({
  title: "Contact",
  description: "Connect with Swadesh Patel on X, GitHub, or LinkedIn for collaboration and project discussions.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactClient />;
}
