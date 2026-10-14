import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Dock from "@/components/Dock";
import { profileData } from "@/data/socials";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap"
});

export const metadata = {
  title: {
    default: "Swadesh Patel | Full-Stack Developer",
    template: "%s | Swadesh Patel"
  },
  description: profileData.bio,
  keywords: [
    "Full Stack Developer",
    "Systems Programming",
    "Next.js",
    "Express.js",
    "C++",
    "Go",
    "MERN",
    "Arch Linux",
    "Portfolio",
    "Swadesh Patel"
  ],
  authors: [{ name: profileData.name }],
  creator: profileData.name,
  metadataBase: new URL("https://swadeshpatel.vercel.app"),
  openGraph: {
    title: "Swadesh Patel | Full-Stack Developer",
    description: profileData.bio,
    type: "website",
    locale: "en_US",
    siteName: "Swadesh Patel Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Swadesh Patel | Full-Stack Developer",
    description: profileData.bio,
    creator: "@swadeshcodes",
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
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased relative min-h-screen bg-black text-white overflow-x-hidden font-sans">
        {/* MAIN CONTENT */}
        <main className="relative z-10 w-full min-h-screen flex flex-col items-center">
          {children}
        </main>

        <Dock />
      </body>
    </html>
  );
}
