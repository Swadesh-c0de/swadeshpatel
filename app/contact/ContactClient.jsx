import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, MessageSquare } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { profileData, socialLinks } from "@/data/socials";

const channels = [
  {
    platform: "LinkedIn",
    handle: "swadeshpatel",
    description: "Project conversations, professional connections, and collaboration.",
    action: "Let’s connect",
    href: socialLinks.linkedin,
    Icon: FaLinkedin,
  },
  {
    platform: "GitHub",
    handle: "@Swadesh-c0de",
    description: "Explore the code, open an issue, or contribute to a project.",
    action: "Explore my repositories",
    href: socialLinks.github,
    Icon: FaGithub,
  },
  {
    platform: "X / Twitter",
    handle: "@swadeshcodes",
    description: "Talk development, Linux, and the ideas behind the builds.",
    action: "Join the conversation",
    href: socialLinks.x,
    Icon: FaXTwitter,
  },
];

export default function ContactClient() {
  return (
    <div className="contact-page page-container pt-24 sm:pt-32 pb-32 text-zinc-100">

      <section className="contact-intro" aria-labelledby="contact-title">
        <div>
          <h1 id="contact-title" className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-white leading-[0.88]">
            LET&apos;S<br />CONNECT.
          </h1>
          <p className="contact-intro-copy">Have something in mind? Let’s talk about your next project, an interesting technical problem, or something worth building together.</p>
          <p className="contact-location"><MapPin size={13} aria-hidden="true" /><span>{profileData.location}</span><span className="contact-meta-divider" aria-hidden="true" /><span>{profileData.timezone}</span></p>
        </div>
        <div className="contact-illustration">
          <Image
            src="/images/satellite-comm-white.png"
            alt="A satellite sending a signal, illustrated in white line art"
            width={1376}
            height={768}
            loading="eager"
            sizes="(max-width: 639px) 90vw, (max-width: 900px) 38vw, 400px"
            className="w-full h-full object-contain"
          />
        </div>
      </section>

      <section aria-labelledby="contact-channels-title">
        <div className="contact-section-heading"><h2 id="contact-channels-title">Where to find me</h2><span>Choose your channel</span></div>
        <div className="contact-channels">
          {channels.map(({ platform, handle, description, action, href, Icon }) => (
            <a key={platform} href={href} target="_blank" rel="noopener noreferrer" className="contact-channel" aria-label={`${platform}: ${action} (opens in a new tab)`}>
              <div className="contact-channel-top"><span className="contact-channel-icon"><Icon size={21} aria-hidden="true" /></span><ArrowUpRight size={17} className="contact-channel-arrow" aria-hidden="true" /></div>
              <div className="contact-channel-copy"><h3>{platform}</h3><p className="contact-handle">{handle}</p><p className="contact-description">{description}</p></div>
              <span className="contact-channel-action">{action}<ArrowUpRight size={13} aria-hidden="true" /></span>
            </a>
          ))}
        </div>
      </section>

      <aside className="contact-context">
        <MessageSquare size={19} strokeWidth={1.4} aria-hidden="true" />
        <div><h2>A little context goes a long way.</h2><p>Share what you’re working on, what you have in mind, and any useful links. It’s a good place to start.</p></div>
        <Link href="/projects">See my work<ArrowUpRight size={14} aria-hidden="true" /></Link>
      </aside>
    </div>
  );
}
