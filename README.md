# Swadesh Patel — Developer Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/) [![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)](https://react.dev/) [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/) [![License](https://img.shields.io/badge/License-MIT-zinc?style=flat-square)](LICENSE) [![Deployment](https://img.shields.io/badge/Deployed_on-Vercel-black?style=flat-square&logo=vercel)](https://swadeshpatel.vercel.app)

A minimalist, high-performance developer portfolio and digital workspace engineered with **Next.js 16 (App Router & Turbopack)**, **React 19**, and **Tailwind CSS v4**. Built with zero heavy animation dependencies, pure hardware-accelerated CSS, and high-performance interactive HTML5 Canvas particle systems.

🌐 **Live Demo**: [swadeshpatel.vercel.app](https://swadeshpatel.vercel.app)

---

## ✨ Highlights & Features

- **⚡ Next.js 16 App Router & Turbopack**: Architecture separating Server Components for dynamic SEO and metadata from lightweight, reactive Client Components.
- **🚀 Zero Bloat / Dependency-Free Animations**: Completely free of heavy animation runtimes; transitions and micro-interactions are driven by hardware-accelerated CSS keyframes and transitions for instant load times and peak Lighthouse scores.
- **🕸️ Interactive Spider-Web Canvas**: Custom physics-driven particle network on HTML5 Canvas reacting dynamically to cursor position, velocity, and viewport resizing.
- **🧭 Floating Minimalist Dock**: macOS-style navigation dock with active route detection, subtle borders, tooltip hover states, and seamless page transitions.
- **💻 Live Project Previews & Archive**: Interactive iframe preview modal and category-filtered searchable project archive.
- **🔄 Infinite Tech Marquee**: Responsive, smooth infinite-scrolling marquee presenting developer toolchains and stacks.
- **🔍 Comprehensive SEO & OpenGraph**: Canonical URL management via dedicated metadata helpers, dynamic OpenGraph social share cards, automated `sitemap.xml`, and strict `robots.txt`.
- **🌙 Glassmorphic Dark Aesthetic**: Polished dark theme using custom theme tokens, backdrop blurs, and mono accent typography.

---

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| **UI Library** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/), `@tailwindcss/postcss` |
| **Graphics & FX** | Native HTML5 Canvas 2D particle simulation & pure CSS animations |
| **Icons** | [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/) |
| **Typography** | `Inter` (Sans) & `JetBrains Mono` (Code) via `next/font/google` |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 📂 Project Structure

```text
├── app/
│   ├── layout.js              # Root layout with fonts, global providers & Dock
│   ├── loading.js             # Route suspension & loading state
│   ├── template.js            # Route transition wrapper
│   ├── page.js                # Server entry for Home page & tech stack icons
│   ├── HomeClient.jsx         # Interactive Home workspace & Hero Bento grid
│   ├── globals.css            # Tailwind v4 theme tokens, utilities & animations
│   ├── opengraph-image.js     # Dynamic OpenGraph social card generator
│   ├── robots.js              # Search engine crawler directives
│   ├── sitemap.js             # Dynamic XML sitemap generator
│   ├── not-found.js           # Custom 404 page
│   ├── about/
│   │   ├── page.js            # Server entry for SEO & metadata
│   │   └── AboutClient.jsx    # Interactive skills, domains & engineering philosophy
│   ├── projects/
│   │   ├── page.js            # Server entry for SEO & metadata
│   │   └── ProjectsClient.jsx # Project showcase & live iframe preview triggers
│   ├── lab/
│   │   ├── page.js            # Server entry for SEO & metadata
│   │   └── LabClient.jsx      # Research experiments, dotfiles & technical workflows
│   └── contact/
│       ├── page.js            # Server entry for SEO & metadata
│       └── ContactClient.jsx  # Social directory & quick contact options
├── components/
│   ├── CornerWeb.jsx          # SVG corner spider web rendering
│   ├── Dock.jsx               # Floating navigation dock
│   ├── LivePreview.jsx        # Project live preview iframe viewer
│   ├── LogoLoop.jsx           # Animated tech stack marquee
│   ├── PageWebs.jsx           # Corner and ambient spider web container
│   ├── ProjectArchive.jsx     # Searchable & filterable project catalog
│   ├── SpiderWeb.jsx          # Interactive spider web canvas component
│   └── WebResidents.jsx       # Corner web pocket containers
├── hooks/
│   └── useSpiderMotion.js     # Spring-based pointer interaction & physics hook
├── config/
│   └── constants.js           # Global application constants
├── data/
│   ├── lab.js                 # Experiments & systems workflows
│   ├── projects.js            # Featured & full project listings
│   ├── skills.js              # Technical domains & development philosophies
│   └── socials.js             # Profile metadata & social profiles
├── lib/
│   ├── metadata.js            # Centralized SEO, OpenGraph & Twitter metadata builder
│   └── spider-web.js          # Particle physics math and canvas rendering logic
└── public/
    └── images/                # 3D workspace renders & static visual assets
```

---

## 👨‍💻 Featured Projects

- **[Rubric](https://github.com/Swadesh-c0de/rubric)**: Minimalist academic term scheduler, daily attendance logger, and journal memo manager. *(Next.js, TypeScript, PostgreSQL, Prisma, Supabase)*
- **[dChat](https://d-chatapp.vercel.app)**: End-to-end encrypted decentralized messaging protocol on XMTP. *(Web3, XMTP, Next.js)*
- **[Vibe-Fi](https://vibe-fi.vercel.app)**: Modern Go-powered terminal audio player (TUI) with real-time visualizer, YouTube streaming, and web documentation portal. *([Go CLI Engine](https://github.com/swadesh-c0de/vibe-fi-go), [Web Docs](https://github.com/Swadesh-c0de/vibe-fi-web))*
- **[GitNode](https://github.com/Swadesh-c0de/gitnode)**: Interactive visualizer engine to explore GitHub repository architectures, dependency graphs, and hierarchy trees. *(Next.js, TypeScript)*
- **[Kontacts](https://kontacts.vercel.app)**: Contact directory application with fluid micro-interactions and glassmorphic UI. *(Next.js, Tailwind CSS)*
- **[Arch Linux Setup](https://github.com/Swadesh-c0de/myArchLinuxConfiguration)**: Automated bootstrapping and dotfiles for fresh Arch Linux setups. *(Bash, Zsh, Kitty)*

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v20.x` or higher
- **Package Manager**: `npm`, `pnpm`, or `bun`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Swadesh-c0de/swadeshpatel.git
   cd swadeshpatel
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   npm run start
   ```

---

## 📬 Connect

- **GitHub**: [@Swadesh-c0de](https://github.com/Swadesh-c0de)
- **X / Twitter**: [@swadeshcodes](https://x.com/swadeshcodes)
- **LinkedIn**: [in/swadeshpatel](https://in.linkedin.com/in/swadeshpatel/)
- **Website**: [swadeshpatel.vercel.app](https://swadeshpatel.vercel.app)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
