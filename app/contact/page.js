import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact",
  description: "Connect with Swadesh Patel on X, GitHub, or LinkedIn for collaboration and project discussions.",
  openGraph: {
    title: "Contact | Swadesh Patel",
    description: "Connect with Swadesh Patel on X, GitHub, or LinkedIn for collaboration and project discussions.",
    url: "/contact",
    siteName: "Swadesh Patel Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}