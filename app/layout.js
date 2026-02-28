import "./globals.css";
import Dock from "./components/Dock";

export const metadata = {
  title: "Swadesh Patel | Full Stack Developer",
  description: "Full Stack Developer specializing in modern web technologies. Explore my projects, skills, and experience in building scalable applications.",
  keywords: ["Full Stack Developer", "Web Developer", "JavaScript", "React", "Next.js", "Node.js", "Portfolio"],
  authors: [{ name: "Swadesh Patel" }],
  creator: "Swadesh Patel",
  metadataBase: new URL("https://swadeshpatel.vercel.app"),
  openGraph: {
    title: "Swadesh Patel | Full Stack Developer",
    description: "Full Stack Developer specializing in modern web technologies. Explore my projects, skills, and experience.",
    type: "website",
    locale: "en_US",
    siteName: "Swadesh Patel Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Swadesh Patel | Full Stack Developer",
    description: "Full Stack Developer specializing in modern web technologies.",
    creator: "@swadeshpatel",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased relative min-h-screen bg-black text-white overflow-x-hidden">

        {/* MAIN CONTENT */}
        <main className="relative z-10 w-full min-h-screen flex flex-col items-center">
          {children}
        </main>

        <Dock />
      </body>
    </html>
  );
}
