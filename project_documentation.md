# Yash Kapure – Developer Portfolio Documentation

## Overview
This project is a high-performance, modern, and production-grade developer portfolio for Yash Kapure, an AWS & DevOps Engineer. The platform acts as a digital resume showcasing academic history, professional experience, cloud projects, and AWS certifications.

## Features
- **Hero Section:** Stunning introduction utilizing Framer Motion for aesthetic entry animations, alongside quick links to GitHub, LinkedIn, and Resume download.
- **Dynamic Content Sections:** Sections like `EduVerse` (Education), `Experience`, `Projects`, and `Certifications` populated dynamically from [constants.tsx](file:///c:/Users/ypkap/Downloads/deploywithyashkapure/constants.tsx) ensuring easy maintainability.
- **Premium Aesthetics:** Employs vibrant color gradients, responsive grid layouts, glassmorphism components, and fluid animations for an enterprise-grade user experience (UX).
- **Accessibility (a11y) & SEO:** Built following WCAG standards (ARIA tags, discernible links, keyboard navigation focus rings) and includes necessary bots/SEO meta capabilities ([robots.txt](file:///c:/Users/ypkap/Downloads/deploywithyashkapure/public/robots.txt), [sitemap.xml](file:///c:/Users/ypkap/Downloads/deploywithyashkapure/public/sitemap.xml)).
- **Responsive Layout:** Tailwind CSS handles breakpoints naturally to support mobile, tablet, and ultra-wide desktops.

## Tech Stack
**Frontend:**
- **Framework:** React 18
- **Build Tool:** Vite
- **Language:** TypeScript ([.tsx](file:///c:/Users/ypkap/Downloads/deploywithyashkapure/App.tsx), [.ts](file:///c:/Users/ypkap/Downloads/deploywithyashkapure/types.ts))
- **Styling:** Tailwind CSS + PostCSS
- **Animations:** Framer Motion
- **Icons:** Lucide React

**Infrastructure & Deployment:**
- **Containerization:** Docker & Docker Compose ([Dockerfile](file:///c:/Users/ypkap/Downloads/deploywithyashkapure/Dockerfile), [docker-compose.yml](file:///c:/Users/ypkap/Downloads/deploywithyashkapure/docker-compose.yml))
- **Web Server:** NGINX ([nginx.conf](file:///c:/Users/ypkap/Downloads/deploywithyashkapure/nginx.conf) included for static serving & routing)
- **CI/CD Readiness:** Contains necessary artifacts to plug right into typical CI/CD pipelines (e.g., GitHub Actions or AWS CodePipeline).

## Code Architecture
- `src/App.tsx & main.tsx`: Root components defining the layout and React DOM bindings.
- `src/components/`: Houses UI components grouped by feature (e.g., [Hero.tsx](file:///c:/Users/ypkap/Downloads/deploywithyashkapure/components/Hero.tsx), [Navbar.tsx](file:///c:/Users/ypkap/Downloads/deploywithyashkapure/components/Navbar.tsx), [Footer.tsx](file:///c:/Users/ypkap/Downloads/deploywithyashkapure/components/Footer.tsx)).
- `src/constants.tsx`: A robust data layer exporting structured arrays (`NAV_LINKS`, `HERO_ROLES`, `PROJECTS`, `EXPERIENCE`, etc.) to keep UI components decoupled from data content.
- `src/types.ts`: TypeScript definitions enforcing structure across the constants and components.
- `src/index.css`: Tailwind directives and custom utility classes.
- `public/`: Stores publicly served static assets, including [Yash-Pramod-Kapure-Resume.pdf](file:///c:/Users/ypkap/Downloads/deploywithyashkapure/public/Yash-Pramod-Kapure-Resume.pdf).

## Resume & Assets Management
The central resume file is managed in two places. The source file may reside in `Assets/Resume/`, but the directly-served and downloadable file exists inside the `public/` directory (`public/Yash-Pramod-Kapure-Resume.pdf`) so the static path `/Yash-Pramod-Kapure-Resume.pdf` works when deployed.

## Local Development
1. **Install Dependencies:**
   ```bash
   npm install
   ```
2. **Run Local Server:**
   ```bash
   npm run dev
   ```
3. **Build for Production:**
   ```bash
   npm run build
   ```

## Docker Deployment
1. **Build the Image:**
   ```bash
   docker build -t yash-portfolio .
   ```
2. **Run via Docker Compose:**
   ```bash
   docker-compose up -d
   ```
The application will be served efficiently by NGINX based on the provided configuration.
