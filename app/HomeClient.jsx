import Image from "next/image";
import Link from "next/link";
import LogoLoop from "@/components/LogoLoop";
import PageWebs from "@/components/PageWebs";
import { MapPin, Download, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { resumeUrl } from "@/config/constants";
import { featuredProjects } from "@/data/projects";
import { socialLinks, profileData } from "@/data/socials";

export default function HomeClient({ techStack = [] }) {
  return (
    <div className="page-container pb-32 flex flex-col items-center">

      <PageWebs />

      {/* HERO */}
      <section className="home-hero w-full py-20 lg:py-32 flex flex-col items-center text-center">
        <div
          className="space-y-6"
        >
          <h1 className="text-5xl sm:text-8xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-200 to-zinc-500 leading-[0.85] pb-4">
            SWADESH<br />PATEL
          </h1>

          <p className="max-w-xl mx-auto text-lg text-zinc-400 font-light">
            <span className="text-zinc-200 font-medium"> Full Stack Developer</span> and <span className="text-zinc-200 font-medium">Arch Linux</span> enthusiast building high-performance web applications with
            <span className="text-zinc-200 font-medium"> Next.js</span>, <span className="text-zinc-200 font-medium">Express.js</span> and <span className="text-zinc-200 font-medium">Go</span>.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <Link href="/projects" className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-100 text-zinc-950 font-medium rounded-full hover:bg-white transition-colors">Explore my work <ArrowUpRight size={16} aria-hidden="true" /></Link>
            <a
              href={resumeUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-700 text-zinc-200 font-medium rounded-full hover:bg-white/5 hover:border-zinc-500 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </section>

      {/* BENTO GRID */}
      <div
        className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]"
      >

        {/* BIO CARD (Large) */}
        <BentoCard className="sm:col-span-2 md:col-span-3 lg:col-span-2 row-span-1 flex flex-col justify-between p-6 sm:p-8 bg-zinc-950/40 border-zinc-800/40 hover:border-zinc-700/60 transition-colors">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 font-medium">Profile</span>
              <span className="text-xs font-mono text-zinc-400">Overview</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">Full-Stack Engineer</h2>
            <p className="text-zinc-400 leading-relaxed font-light text-sm sm:text-base">
              {profileData.bio}
            </p>
          </div>
        </BentoCard>

        {/* SOCIALS */}
        <BentoCard className="sm:col-span-1 md:col-span-2 lg:col-span-1 bg-zinc-950/40 border-zinc-800/40 hover:border-zinc-700/60 p-6 flex flex-col justify-between transition-colors">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 font-medium">Connect</span>
          </div>
          <div className="flex items-center justify-center gap-3.5 my-auto">
            <SocialLink icon={<FaGithub className="w-5 h-5" />} href={socialLinks.github} label="GitHub" />
            <SocialLink icon={<FaXTwitter className="w-5 h-5" />} href={socialLinks.x} label="X (Twitter)" />
            <SocialLink icon={<FiLinkedin className="w-5 h-5" />} href={socialLinks.linkedin} label="LinkedIn" />
          </div>
        </BentoCard>

        {/* LOCATION / STATUS */}
        <BentoCard className="sm:col-span-1 md:col-span-1 lg:col-span-1 flex flex-col justify-between p-6 bg-zinc-950/40 border-zinc-800/40 hover:border-zinc-700/60 transition-colors">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 font-medium">Location</span>
            <span className="text-[10px] font-mono text-zinc-400">{profileData.timezone}</span>
          </div>
          <div className="text-center my-auto flex flex-col items-center">
            <MapPin className="w-6 h-6 text-zinc-400 mb-2" />
            <span className="text-zinc-200 font-bold block text-sm tracking-tight">{profileData.location}</span>
          </div>
        </BentoCard>

        {/* TECH STACK (Wide Marquee) */}
        <BentoCard className="sm:col-span-2 md:col-span-3 lg:col-span-4 overflow-hidden relative min-h-40 flex flex-col justify-center bg-zinc-950/40 border-zinc-800/40 hover:border-zinc-700/60 p-6 sm:p-8">
          <div className="w-full">
            <LogoLoop
              logos={techStack}
              speed={40}
              direction="left"
              logoHeight={40}
              gap={50}
              pauseOnHover={true}
              ariaLabel="Tech stack"
            />
          </div>
        </BentoCard>

        {/* WHITE DESIGN LINE ART PC CARD (2 Columns - Left Side) */}
        <PCArtCard />

        {/* FEATURED PROJECTS SPOTLIGHT (2 Columns - Right Side) */}
        <FeaturedProjectsCard />

      </div>

      <section className="home-contact" aria-labelledby="home-contact-title">
        <div><p className="home-kicker">Have a project in mind?</p><h2 id="home-contact-title">Let’s build something useful.</h2><p>Web applications, developer tools, or an interesting technical problem.</p></div>
        <Link href="/contact">Start a conversation <ArrowUpRight size={17} aria-hidden="true" /></Link>
      </section>
    </div>
  );
}

function BentoCard({ children, className = "" }) {
  const hasBorder = !className.includes("border-none") && !className.includes("border-0");
  return (
    <div
      className={`rounded-3xl ${hasBorder ? "bento-card border border-zinc-800/50" : ""} overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}

function FeaturedProjectsCard() {
  const featured = featuredProjects;

  return (
    <BentoCard className="h-full sm:col-span-2 md:col-span-3 lg:col-span-2 order-1 lg:order-2 p-6 sm:p-8 flex flex-col justify-between bg-zinc-950/40 border-zinc-800/40 hover:border-zinc-700/60 transition-all duration-500">
      <div>
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 font-medium">Selected Work</h2>
          <Link
            href="/projects"
            className="text-xs font-mono text-zinc-400 hover:text-zinc-200 flex items-center gap-1 transition-colors group"
          >
            All Work <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <div className="divide-y divide-zinc-900/80">
          {featured.map((proj) => (
            <div
              key={proj.title}
              className="py-3.5 first:pt-0 last:pb-0 flex items-center justify-between gap-4 group/row transition-all duration-300"
            >
              <div className="min-w-0">
                <div className="flex items-baseline gap-2.5">
                  <h3 className="text-base font-medium text-zinc-200 group-hover/row:text-white transition-colors tracking-tight">
                    {proj.title}
                  </h3>
                  <span className="text-[10px] font-mono text-zinc-400">
                    {proj.tag}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 font-light leading-relaxed mt-1">
                  {proj.desc}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0 opacity-80 sm:opacity-50 group-hover/row:opacity-100 transition-opacity">
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-w-11 min-h-11 inline-flex items-center justify-center p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900/60 transition-colors"
                    title="Source Code"
                    aria-label={`${proj.title} Source Code`}
                  >
                    <FaGithub className="w-3.5 h-3.5" />
                  </a>
                )}
                {proj.live && (
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-w-11 min-h-11 inline-flex items-center justify-center p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900/60 transition-colors"
                    title="Live Preview"
                    aria-label={`${proj.title} Live Preview`}
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 mt-4 border-t border-zinc-900/80 flex items-center justify-between text-[11px] font-mono text-zinc-400">
        <span>Next.js · Express.js · Go</span>
      </div>
    </BentoCard>
  );
}

function PCArtCard() {
  return (
    <BentoCard className="h-full min-h-72 sm:col-span-2 md:col-span-3 lg:col-span-2 order-2 lg:order-1 flex items-center justify-center border-0 border-none bg-transparent">
        <div className="relative w-full flex items-center justify-center">
          <Image
            src="/images/pc-isometric-white.png"
            alt="Minimalist PC Line Art"
            width={1376}
            height={768}
            sizes="(max-width: 639px) 125vw, (max-width: 1023px) 120vw, 620px"
            className="w-full h-auto scale-125 object-contain opacity-90"
          />
        </div>
    </BentoCard>
  );
}

function SocialLink({ icon, href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="p-3 rounded-full bg-white/5 text-zinc-400 hover:bg-white hover:text-black transition-all duration-300"
    >
      {icon}
    </a>
  );
}
