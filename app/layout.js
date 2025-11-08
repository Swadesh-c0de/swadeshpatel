"use client";

import "./globals.css";
import Dock from "./components/Dock";
import { Particles } from "@/components/ui/shadcn-io/particles";
import { Meteors } from "@/components/ui/shadcn-io/meteors";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased relative min-h-dvh flex flex-col overflow-hidden bg-transparent text-white`}
      >
        {/* Cosmic Background */}
        <Meteors number={10} className="scale-120" />
        <Particles
          className="absolute inset-0"
          quantity={250}
          ease={80}
          staticity={50000}
          color="#ffffff"
          size={0.2}
        />

        {/* MAIN WINDOW */}
        <main className="relative flex justify-center bg-black sm:bg-transparent mx-0 h-screen sm:mx-auto w-[98%] sm:w-full border-zinc-600 rounded-3xl overflow-y-auto"
          style={{
            height: "calc(100svh - 4rem)",
            WebkitOverflowScrolling: "touch",
            transform: "scale(0.97)",
            transformOrigin: "top center",
          }}
        >
          {children}
        </main>
        <Dock />
      </body>
    </html>
  );
}
