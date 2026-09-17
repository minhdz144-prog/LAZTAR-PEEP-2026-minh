+++
title = "Day 03 (Week 1) - 17/09/2026"
weight = 3
+++

## Detailed Work Report: Week 1 - Day 3

Today, I continued to develop my skills with Next.js and Tailwind CSS by building a complete SaaS Landing Page. At the same time, I resolved issues related to the Git Workflow and successfully deployed independent projects to Vercel.

### 1. Completed Tasks

- **Building SaaS Landing Page (Next.js & Tailwind CSS):**
  - Developed 10 independent UI components including: Navbar, Hero, Services, About, Stats, Features, Portfolio, Testimonials, Blog, and Footer.
  - Applied dynamic data passing techniques using Mock Data (`mockData.ts`) combined with React's `map()` function, making the UI highly reusable and the codebase cleaner.
  - Resolved browser image performance warnings (Image Optimization) by adding the `sizes` property to `<Image fill />` components.

- **Comprehensive Portfolio UI Upgrade (Orbit Light Theme):**
  - Refactored the entire Portfolio UI from a Dark Theme to a clean, static Light Theme, inspired by the professional Orbit template (Colorlib).
  - Successfully integrated the modern `lucide-react` icon set to replace legacy icons, ensuring faster load times and sharper visuals.
  - Optimized grid layouts and implemented smooth hover effects (micro-interactions) using Tailwind CSS.
  - Updated the career orientation across the website to **Full-stack Developer (Front-end & Back-end)** to accurately reflect current capabilities and goals.
  - Reconfigured `next.config.ts` (Remote Patterns) to allow secure external image rendering (`images.unsplash.com`).
  - Resolved Next.js App Router Server Component compatibility issues (passing the `onError` function to Client components) by properly utilizing the `"use client"` directive.

- **Source Code Management & Git Troubleshooting:**
  - Restructured the codebase: Successfully separated the `my-app` (Landing Page) and `portfolio` projects, which were previously inside a Monorepo, into individual GitHub repositories for better management.
  - Fixed Git history errors: Utilized Interactive Rebase (`git rebase -i`) and Filter-Branch scripts to overwrite (amend) incorrect author/committer information in previous commits, ensuring a professional source code history.

- **Deploy & Vercel Configuration:**
  - Disconnected the misconfigured legacy projects on Vercel.
  - Initialized new Vercel projects and successfully linked them with the newly separated individual repositories.
  - Successfully configured a custom domain (`portfolio-minhdz144.vercel.app`).
  - Permanently fixed Vercel Deployment errors ("Root Directory does not exist") caused by project structure changes after separating the Monorepo.

### 2. Source Code & Live Demo (GitHub Links)

As requested, here are the source code links for the 2 projects that were separated and finalized today:

1. **SaaS Landing Page:** 
   - GitHub Repo: [https://github.com/minhdz144-prog/saas-landing-page](https://github.com/minhdz144-prog/saas-landing-page)
2. **Personal Portfolio:**
   - GitHub Repo: [https://github.com/minhdz144-prog/portfolio-Minh](https://github.com/minhdz144-prog/portfolio-Minh)
   - Live Demo: [https://portfolio-minhdz144.vercel.app](https://portfolio-minhdz144.vercel.app)

### 3. Theory Theoretical Knowledge & Notes

- Study notes and theoretical concepts: [Google Docs](https://docs.google.com/document/d/165sNM7znFS9uW2Y5OKRvPK-hXXvIbDK5aSpcgVbyJuE/edit?usp=drive_link)
