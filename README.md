# Swadesh Patel — Developer Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/) [![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)](https://react.dev/) [![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/) [![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-black?style=flat-square&logo=framer)](https://www.framer.com/motion/) [![Deployment](https://img.shields.io/badge/Deployed_on-Vercel-black?style=flat-square&logo=vercel)](https://swadeshpatel.vercel.app)

A minimalist, high-performance developer portfolio and digital workspace engineered with **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, and **Framer Motion**.

🌐 **Live Website**: [swadeshpatel.vercel.app](https://swadeshpatel.vercel.app)

---

## ✨ Features

- **⚡ Next.js 16 App Router Architecture**: Clean separation between Server Components (SEO metadata & static generation) and interactive Client Components (`*Client.jsx`).
- **🎨 Glassmorphic & Bento Aesthetics**: Sleek dark-mode aesthetic with backdrop blurs, subtle border highlights, and responsive bento grids.
- **🧭 Floating Interactive Dock**: macOS-style bottom navigation dock with dynamic route highlights, micro-interactions, and tooltips.
- **🔄 Smooth Page Transitions**: Smooth navigation using Framer Motion wrappers.
- **📁 Modular Data Layer**: All project data, technical skills, lab experiments, and social profiles decoupled into organized ES modules inside [`data/`](./data/).
- **🔍 Comprehensive SEO & OpenGraph**: Rich dynamic meta tags, Twitter card previews, robots directive, and structured semantic HTML.
- **⚠️ Custom 404 Experience**: Dedicated interactive Not-Found route consistent with the dark glassmorphic design language.

---

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| **UI Library** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/), `@tailwindcss/postcss` |
| **Animation** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/) |
| **Typography** | `Inter` (Sans) & `JetBrains Mono` (Code/Mono) via `next/font/google` |
| **Utilities** | `clsx`, `tailwind-merge`, `class-variance-authority` |

---

## 📂 Project Structure

```text
├── app/
│   ├── layout.js              # Root layout with fonts, metadata, Dock & transitions
│   ├── page.js                # Home page (Workspace & Hero Bento)
│   ├── globals.css            # Global CSS, theme tokens & Tailwind v4 setup
│   ├── not-found.js           # Custom 404 page
│   ├── about/
│   │   ├── page.js            # Server entry for SEO & metadata
│   │   └── AboutClient.jsx    # Interactive skills, domains & philosophy
│   ├── projects/
│   │   ├── page.js            # Server entry for SEO & metadata
│   │   └── ProjectsClient.jsx # Project showcase & live previews
│   ├── lab/
│   │   ├── page.js            # Server entry for SEO & metadata
│   │   └── LabClient.jsx      # Research experiments & technical archive
│   └── contact/
│       ├── page.js            # Server entry for SEO & metadata
│       └── ContactClient.jsx  # Social directory & quick contact options
├── components/
│   ├── Dock.jsx               # Floating navigation dock
│   ├── PageTransition.jsx     # Route transition wrapper
│   └── LogoLoop.jsx           # Animated tech stack marquee
├── data/
│   ├── projects.js            # Featured & full project listings
│   ├── skills.js              # Technical domains & development philosophies
│   ├── lab.js                 # Research logs & workflows
│   └── socials.js             # Social profiles & personal bio info
└── public/
    └── images/                # 3D workspace renders & static assets
```

---

## 👨‍💻 Featured Projects

- **[Rubric](https://github.com/Swadesh-c0de/rubric)**: Minimalist academic term scheduler, daily attendance logger, and journal memo manager. *(Next.js, TypeScript, PostgreSQL, Prisma)*
- **[dChat](https://d-chatapp.vercel.app)**: End-to-end encrypted decentralized messaging protocol on XMTP. *(Web3, XMTP, Next.js)*
- **[Vibe-Fi](https://vibe-fi.vercel.app)**: Modern Go-powered terminal audio player (TUI) with real-time visualizer, YouTube streaming, and web documentation portal. *([Go CLI Engine](https://github.com/swadesh-c0de/vibe-fi-go), [Web Docs](https://github.com/Swadesh-c0de/vibe-fi-web))*
- **[GitNode](https://github.com/Swadesh-c0de/gitnode)**: Interactive visualizer engine to explore GitHub repository architectures. *(Next.js, TypeScript)*
- **[Kontacts](https://kontacts.vercel.app)**: Contact directory application with fluid micro-interactions and glassmorphic UI. *(Next.js, Framer Motion)*
- **[Arch Linux Setup](https://github.com/Swadesh-c0de/myArchLinuxConfiguration)**: Automated bootstrapping and dotfiles for fresh Arch Linux setups. *(Bash, Zsh, Kitty)*

---

## 📬 Connect

- **GitHub**: [@Swadesh-c0de](https://github.com/Swadesh-c0de)
- **X / Twitter**: [@swadeshcodes](https://x.com/swadeshcodes)
- **LinkedIn**: [in/swadeshpatel](https://in.linkedin.com/in/swadeshpatel/)
- **Website**: [swadeshpatel.vercel.app](https://swadeshpatel.vercel.app)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
