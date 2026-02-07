'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Cpu,
  Leaf,
  Users,
  BarChart3,
  ArrowRight,
  Target,
  Zap,
  Globe,
  HeartHandshake,
  Sparkles,
  Heart,
  TrendingUp
} from 'lucide-react';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import { BentoGrid, BentoItem, FeatureCard, StatCard } from '@/components/BentoGrid';
import { ImpactStoriesSection } from '@/components/ImpactStories';

const impactStories = [
  {
    quote: "The RUDRA training program taught me AI skills I never thought I could learn. Now I help map our village's resources using GIS technology.",
    name: "Rohit Patil",
    role: "Youth Fellow",
    project: "Project RUDRA",
    gradient: "from-violet to-pink",
  },
  {
    quote: "HEMA gave me more than weaving skills—it gave me confidence. Today I run my own handloom business and employ three other women.",
    name: "Sunita Devi",
    role: "Artisan Entrepreneur",
    project: "Project HEMA",
    gradient: "from-pink to-amber-500",
  },
  {
    quote: "Through AFIU, our team identified water conservation solutions that now benefit 200+ families in our village.",
    name: "Priya Sharma",
    role: "Community Leader",
    project: "Project AFIU",
    gradient: "from-cyan to-violet",
  },
];

const projects = [
  {
    title: 'Project RUDRA',
    description: 'Rural & Urban Development through Resilience and Action. Comprehensive skill training in AI, GIS, sustainable farming, and traditional arts.',
    icon: Cpu,
    gradient: 'bg-gradient-to-br from-violet-500 to-pink-500',
    href: '/projects',
    stats: [
      { value: '500+', label: 'Trained' },
      { value: '25+', label: 'Villages' },
    ],
  },
  {
    title: 'Project HEMA',
    description: 'Handloom Empowerment for Mahila Artisans. Reviving Khadi heritage and empowering women weavers across Maharashtra.',
    icon: HeartHandshake,
    gradient: 'bg-gradient-to-br from-pink-500 to-orange-400',
    href: '/projects',
    stats: [
      { value: '300+', label: 'Women' },
      { value: '20+', label: 'Units' },
    ],
  },
  {
    title: 'Project AFIU',
    description: 'Active Fellow Intelligence Unit. Youth-led village audits and innovation programs creating sustainable solutions.',
    icon: Users,
    gradient: 'bg-gradient-to-br from-cyan-500 to-violet-500',
    href: '/projects',
    stats: [
      { value: '100+', label: 'Fellows' },
      { value: '50+', label: 'Projects' },
    ],
  },
  {
    title: 'Environmental Auditing',
    description: 'Sustainability consulting for businesses including energy audits, zero-waste strategies, and ESG compliance.',
    icon: Leaf,
    gradient: 'bg-gradient-to-br from-emerald-500 to-cyan-500',
    href: '/projects',
    stats: [
      { value: '200+', label: 'Audits' },
      { value: '30%', label: 'Savings' },
    ],
  },
];

const stats = [
  { value: '1000+', label: 'Lives Impacted', icon: Users },
  { value: '25+', label: 'Villages Reached', icon: Globe },
  { value: '4', label: 'Active Projects', icon: Target },
  { value: '50+', label: 'Partners', icon: TrendingUp },
];

export default function HomePage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <Hero />

      {/* Projects Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Our Initiatives
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Transformative{' '}
              <span className="bg-gradient-to-r from-violet-600 to-pink-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Each initiative is designed to create lasting impact through innovation,
              sustainability, and community empowerment.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>

          {/* View All Projects CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 group"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 rounded-3xl bg-gradient-to-br from-violet-50 to-pink-50 border border-violet-100"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center">
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-500 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text text-transparent">
                UICA?
              </span>
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              We combine technology, tradition, and community to create sustainable change.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Mission-Driven Impact</h3>
              <p className="text-gray-500 leading-relaxed">
                Every project is designed with a clear goal: to create measurable, lasting
                change in communities while empowering individuals.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Tech-Enabled Solutions</h3>
              <p className="text-gray-500 leading-relaxed">
                We leverage AI, GIS, and digital tools to amplify impact and reach
                communities in innovative ways.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-500 md:col-span-2 lg:col-span-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center mb-6">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Local & Global Vision</h3>
              <p className="text-gray-500 leading-relaxed">
                Solutions rooted in local knowledge combined with global best practices
                for maximum effectiveness.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stories Section */}
      <ImpactStoriesSection stories={impactStories} />

      {/* CTA Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2.5rem] text-center"
          >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-purple-600 to-pink-500" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent_50%)]" />

            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-pink-500/20 blur-2xl" />

            {/* Content */}
            <div className="relative z-10 px-8 py-20 md:px-16 md:py-24">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              >
                Let&apos;s Build a Better
                <br />
                Future Together
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
              >
                Your support can transform lives. Join us as a donor, volunteer, or partner
                to create lasting change in communities across India.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Link
                  href="/donate"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-violet-600 font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Heart className="w-5 h-5" />
                  Donate Now
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  Get Involved
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
