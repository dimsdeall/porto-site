# Dimas Nurcahyo Putra — Portfolio Website

Personal portfolio website refactored from a legacy React Vite app to **Next.js 15 (App Router)**. This portfolio features modern design aesthetics, smooth animations, interactive components, and multilingual support.

*Note: This repository is a refactored version of the original legacy repository hosted on GitLab at [gitlab.com/server-dimsdeall/home-react-type](https://gitlab.com/server-dimsdeall/home-react-type).*

## 🚀 Features & Tech Stack

### Tech Stack
*   **Framework**: [Next.js 15](https://nextjs.org/) (App Router) & React 19
*   **Language**: TypeScript
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
*   **UI Components**: [HeroUI](https://heroui.com/) (formerly NextUI)
*   **Typography**: JetBrains Mono via Google Fonts
*   **Smooth Scroll**: [Lenis](https://lenis.darkroom.engineering/) for buttery-smooth inertial scroll
*   **Localization (i18n)**: English (Default) & Bahasa Indonesia context-based translation

### Key Updates & Optimizations
1.  **Firebase Removal**: Completely migrated away from Firebase to facilitate native, fast deployment on **Vercel**.
2.  **Scroll Optimizations**: Optimized scroll reveal transitions using lightweight GPU-accelerated CSS and `react-intersection-observer` (removed jerky scroll delays).
3.  **Custom Favicon**: Configured to use the custom portfolio icon matching the logo design.
4.  **New Projects Added**: Integrated projects directly from GitHub, including `event-driven-simple-case` and `rabbitmq-simple-case`.

---

## 🛠️ Getting Started

### Prerequisites
Make sure you have **Node.js** (latest LTS recommended) installed.

### Installation
Clone the repository:
```bash
git clone https://github.com/dimsdeall/porto-site.git
cd porto-site
```

Install dependencies:
```bash
npm install
```

### Running Development Server
Run the local dev server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build and Production
To build the application for production:
```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```text
├── app/
│   ├── components/       # Portfolio UI sections (Header, TechStack, Project, Contact, Navbar)
│   ├── context/          # LanguageContext for i18n
│   ├── globals.css       # Design tokens, custom animations, and scrollbar styles
│   ├── layout.tsx        # App layout and SEO metadata definitions
│   ├── page.tsx          # Main entry page
│   └── providers.tsx     # Application provider wrapper (Lenis, LanguageContext)
├── public/
│   ├── favicon.ico       # Custom portfolio favicon
│   └── img/              # Image assets for projects and profile photo
└── package.json          # Dependencies & scripts
```

---

## 🌐 Deployment

This project is optimized and ready to be deployed on the [Vercel Platform](https://vercel.com). Just connect your GitHub repository to Vercel for automatic deployments on every commit to `main`.
