'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Cpu,
  Leaf,
  Users,
  ArrowRight,
  Target,
  Zap,
  Globe,
  HeartHandshake,
  Sparkles,
  Heart,
  TrendingUp,
  ChevronRight
} from 'lucide-react';
import Hero from '@/components/Hero';
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
    title: 'RUDRA',
    fullTitle: 'Project RUDRA',
    description: 'AI, GIS & skill training for rural communities',
    icon: Cpu,
    gradient: 'from-violet-500 to-purple-600',
    stats: { value: '500+', label: 'Trained' },
  },
  {
    title: 'HEMA',
    fullTitle: 'Project HEMA',
    description: 'Khadi heritage & women artisan empowerment',
    icon: HeartHandshake,
    gradient: 'from-pink-500 to-rose-600',
    stats: { value: '300+', label: 'Women' },
  },
  {
    title: 'AFIU',
    fullTitle: 'Project AFIU',
    description: 'Youth-led village innovation programs',
    icon: Users,
    gradient: 'from-cyan-500 to-blue-600',
    stats: { value: '100+', label: 'Fellows' },
  },
  {
    title: 'Green Audit',
    fullTitle: 'Environmental Auditing',
    description: 'Sustainability consulting for businesses',
    icon: Leaf,
    gradient: 'from-emerald-500 to-teal-600',
    stats: { value: '200+', label: 'Audits' },
  },
];

const stats = [
  { value: '1000+', label: 'Lives', icon: Users },
  { value: '25+', label: 'Villages', icon: Globe },
  { value: '4', label: 'Projects', icon: Target },
  { value: '50+', label: 'Partners', icon: TrendingUp },
];

const features = [
  {
    title: 'Mission-Driven',
    description: 'Creating measurable, lasting change in communities',
    icon: Target,
    gradient: 'from-violet-500 to-pink-500',
  },
  {
    title: 'Tech-Enabled',
    description: 'AI, GIS, and digital tools amplify our impact',
    icon: Zap,
    gradient: 'from-cyan-500 to-violet-500',
  },
  {
    title: 'Local & Global',
    description: 'Local knowledge meets global best practices',
    icon: Globe,
    gradient: 'from-emerald-500 to-cyan-500',
  },
];

export default function HomePage() {
  return (
    <main className="bg-white overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Projects Section - Mobile Optimized */}
      <section className="py-16 sm:py-20 lg:py-28 px-5 sm:px-6 bg-gradient-to-b from-gray-50/80 to-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-14"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-violet-100 text-violet-700 text-xs font-medium mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Our Initiatives
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Transformative{' '}
              <span className="bg-gradient-to-r from-violet-600 to-pink-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-gray-500 text-sm sm:text-base lg:text-lg max-w-md mx-auto">
              Creating lasting impact through innovation and empowerment
            </p>
          </motion.div>

          {/* Projects Grid - Mobile Card Design */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-8 sm:mb-10">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.08 }}
              >
                <Link href="/projects" className="block group">
                  <div className="relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-violet-500/5 active:scale-[0.98] transition-all duration-300">
                    <div className="p-5 sm:p-6">
                      {/* Top Row */}
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg`}>
                          <project.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="text-xl sm:text-2xl font-bold text-gray-900">{project.stats.value}</div>
                          <div className="text-xs text-gray-400">{project.stats.label}</div>
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1.5 group-hover:text-violet-600 transition-colors">
                        {project.fullTitle}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Action */}
                      <div className="flex items-center text-violet-600 text-sm font-medium">
                        <span>Learn more</span>
                        <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* View All CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white text-sm font-semibold rounded-xl hover:bg-gray-800 active:scale-[0.98] transition-all"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Compact Mobile */}
      <section className="py-12 sm:py-16 px-5 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-4 gap-2 sm:gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="text-center p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-violet-50 to-pink-50 border border-violet-100/50"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2 sm:mb-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center">
                  <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="text-lg sm:text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-[10px] sm:text-xs text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Mobile First */}
      <section className="py-16 sm:py-20 lg:py-28 px-5 sm:px-6 bg-gradient-to-b from-white to-gray-50/80">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-14"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Why{' '}
              <span className="bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text text-transparent">
                UICA?
              </span>
            </h2>
            <p className="text-gray-500 text-sm sm:text-base max-w-sm mx-auto">
              Technology + Tradition + Community = Sustainable Change
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-4 sm:gap-5">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <ImpactStoriesSection stories={impactStories} />

      {/* CTA Section - Mobile Optimized */}
      <section className="py-16 sm:py-20 lg:py-28 px-5 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl sm:rounded-3xl"
          >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-purple-600 to-pink-500" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent_50%)]" />

            {/* Decorative */}
            <div className="absolute top-4 left-4 sm:top-8 sm:left-8 w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-white/10 blur-xl" />
            <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 w-20 sm:w-32 h-20 sm:h-32 rounded-full bg-pink-500/20 blur-xl" />

            {/* Content */}
            <div className="relative z-10 px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20 text-center">
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-4 sm:mb-5"
              >
                Build a Better Future
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>Together
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-white/80 text-sm sm:text-base lg:text-lg mb-8 max-w-lg mx-auto"
              >
                Join us as a donor, volunteer, or partner to transform lives across India
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-3"
              >
                <Link
                  href="/donate"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-violet-600 font-bold rounded-xl shadow-lg hover:shadow-xl active:scale-[0.98] transition-all"
                >
                  <Heart className="w-4 h-4" />
                  Donate Now
                </Link>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 active:scale-[0.98] transition-all"
                >
                  Get Involved
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
