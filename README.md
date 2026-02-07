# UICA - United Innovation and Care Association

A modern, responsive website for UICA NGO built with Next.js 16, featuring an Oscar Pico-inspired projects gallery with horizontal scrolling, custom cursor effects, and premium animations.

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![React](https://img.shields.io/badge/React-19-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-cyan)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-purple)

## ✨ Features

- **Oscar Pico-Style Projects Page** - Full-screen horizontal scrolling gallery with custom cursor
- **Modern Design** - Clean, light theme with gradient accents and smooth animations
- **Responsive Layout** - Works seamlessly on desktop and mobile
- **Framer Motion Animations** - Smooth page transitions and hover effects
- **Component-Based Architecture** - Reusable React components

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Navigate to the Next.js project directory
cd website/ucai-nextjs

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at **http://localhost:3000**

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm run start
```

## 📁 Project Structure

```
ucai-nextjs/
├── src/
│   ├── app/
│   │   ├── page.tsx           # Home page
│   │   ├── projects/
│   │   │   ├── page.tsx       # Oscar Pico-style projects gallery
│   │   │   └── layout.tsx     # Projects layout (hides global nav)
│   │   ├── about/page.tsx     # About page
│   │   ├── contact/page.tsx   # Contact page
│   │   ├── donate/page.tsx    # Donate page
│   │   └── globals.css        # Global styles
│   └── components/
│       ├── Hero.tsx           # Hero section with animations
│       ├── Navbar.tsx         # Navigation bar
│       ├── Footer.tsx         # Footer component
│       ├── ProjectCard.tsx    # Project card with hover effects
│       ├── BentoGrid.tsx      # Bento grid layouts
│       └── ImpactStories.tsx  # Testimonials section
├── public/                    # Static assets
├── package.json
└── tailwind.config.ts
```

## 🎨 Key Pages

### Home Page (`/`)
- Two-column hero with animated background
- Project cards grid with hover effects
- Stats section with gradient backgrounds
- Features section
- Impact stories testimonials
- CTA section

### Projects Gallery (`/projects`)
- **Full-screen horizontal scrolling** - Each project takes 100vw × 100vh
- **Custom cursor** - Expands to "View" on hover
- **Scroll hijacking** - Vertical scroll converted to horizontal navigation
- **Navigation dots** - Right-side dots with project names on hover
- **Keyboard support** - Arrow keys to navigate
- **Progress bar** - Shows scroll position

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 16 | React framework with App Router |
| React 19 | UI library |
| Tailwind CSS 4 | Utility-first styling |
| Framer Motion | Animations and transitions |
| Lucide React | Icon library |
| TypeScript | Type safety |

## 📱 Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with hero, projects, features, testimonials |
| `/projects` | Oscar Pico-style horizontal scrolling gallery |
| `/about` | About UICA page |
| `/contact` | Contact form |
| `/donate` | Donation page |

## 🎯 UICA Projects

1. **Project RUDRA** - Rural & Urban Development through AI, GIS training
2. **Project HEMA** - Handloom Empowerment for Mahila Artisans
3. **Project AFIU** - Active Fellow Intelligence Unit for youth
4. **Environmental Auditing** - Sustainability consulting services

## 📝 License

This project is proprietary to UICA - United Innovation and Care Association.

## 👥 Contact

- Website: [uica.org](https://uica.org)
- Email: contact@uica.org
- Location: Pune, Maharashtra, India
