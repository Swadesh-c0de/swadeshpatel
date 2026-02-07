"use client";

import "./globals.css";
import Dock from "./components/Dock";

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
