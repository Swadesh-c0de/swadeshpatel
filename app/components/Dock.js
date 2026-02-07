"use client";

import { motion } from "framer-motion";
import { Home, User, FolderOpen, Mail, Orbit } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const dockItems = [
  { name: "Home", icon: Home, href: "/" },
  { name: "About", icon: User, href: "/about" },
  { name: "Projects", icon: FolderOpen, href: "/projects" },
  { name: "Contact", icon: Mail, href: "/contact" },
  { name: "Lab", icon: Orbit, href: "/lab" },
];

export default function Dock() {
  const pathname = usePathname();

  return (
    <div
      className="fixed max-h-[10vh] bottom-[1vh] left-1/2 -translate-x-1/2 flex gap-3 sm:gap-6 px-4 sm:px-6 py-2 sm:py-3
                 backdrop-blur-sm rounded-2xl z-50 overflow-hidden"
    >
      {dockItems.map((item) => {
        const Icon = item.icon;
        const active = pathname === item.href;

        return (
          <Link key={item.name} href={item.href}>
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className={`flex flex-col items-center text-xs transition-colors duration-300
                ${active
                  ? "text-gray-300"
                  : "text-gray-400 hover:text-zinc-200"
                }`}
            >
              <div
                className={`p-3 rounded-xl transition-colors duration-300
                  ${active
                    ? "bg-zinc-800/70"
                    : "hover:bg-zinc-800/50"
                  }`}
              >
                <Icon className="w-6 h-6" />
              </div>
            </motion.div>
          </Link>
        );
      })}
    </div>
  );
}
