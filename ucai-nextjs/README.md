# UICA - United Integrated Community Advancement

A modern, responsive website for UICA, an organization focused on rural empowerment through technology, sustainability, and community development in Maharashtra, India.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=flat-square&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11-ff0055?style=flat-square&logo=framer)

## ✨ Features

- **Responsive Design** - Mobile-first approach with optimized layouts for all devices
- **Animated UI** - Smooth animations powered by Framer Motion
- **Oscar Pico-style Projects** - Horizontal scroll gallery on desktop, vertical cards on mobile
- **Modern Stack** - Next.js 16, TypeScript, Tailwind CSS 4
- **Touch-friendly** - Optimized for mobile with swipe gestures and tap feedback

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Export static site (for GitHub Pages)
npm run build && npx next export
```

Visit **http://localhost:3000** to view the site.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── projects/          # Projects gallery
│   ├── about/             # About page
│   ├── contact/           # Contact form
│   ├── donate/            # Donation page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Hero.tsx           # Landing hero section
│   ├── Navbar.tsx         # Navigation with mobile menu
│   ├── Footer.tsx         # Site footer
│   ├── ProjectCard.tsx    # Project card component
│   ├── ImpactStories.tsx  # Testimonial carousel
│   └── Logo.tsx           # Brand logo
└── lib/                   # Utilities
```

## 🎨 Key Pages

| Page | Description |
|------|-------------|
| `/` | Home with Hero, Projects, Stats, Features, CTA |
| `/projects` | Oscar Pico-style animated gallery |
| `/about` | Organization story and team |
| `/contact` | Contact form |
| `/donate` | Donation information |

## 📱 Mobile Optimization

- **Hero**: Centered layout, stacked buttons, 2.5rem base font
- **Navbar**: Full-screen menu with icon navigation
- **Projects**: Vertical scroll with 70vh cards
- **Cards**: Touch feedback with `active:scale` animations
- **Stats**: 4-column compact grid

## 🏗️ UICA Projects

1. **RUDRA** - AI, GIS, and technology training for rural youth
2. **HEMA** - Khadi handloom empowerment for women artisans
3. **AFIU** - Active Fellows for youth-led village innovation
4. **Green Audit** - Environmental sustainability consulting

## 🔧 Configuration

```typescript
// next.config.ts
const nextConfig = {
  // Production: static export for GitHub Pages
  output: 'export',
  basePath: '/ucia',
  
  // Development: runs without basePath
  images: { unoptimized: true },
};
```

## 📦 Dependencies

- `next` - React framework
- `framer-motion` - Animation library
- `lucide-react` - Icon library
- `tailwindcss` - Utility-first CSS

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing`)
5. Open a Pull Request

## 📄 License

MIT License - See [LICENSE](LICENSE) for details.

---

**UICA** - Empowering Rural India Through Innovation 🌱
