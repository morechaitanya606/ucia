'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
    HeartHandshake,
    CheckCircle2,
    ArrowLeft,
    ArrowRight,
    Target,
    Palette,
    ShoppingBag,
    BookOpen,
    Users,
    Sparkles
} from 'lucide-react';

const project = {
    title: 'Project HEMA',
    subtitle: 'Handloom Empowerment for Mahila Artisans',
    description: 'Reviving and modernizing the age-old tradition of Khadi weaving. We equip rural women artisans with technical skills, design know-how, and entrepreneurial confidence to thrive in modern markets.',
    gradient: 'from-pink to-amber-500',
    stats: [
        { value: '300+', label: 'Women Trained' },
        { value: '20+', label: 'Weaving Units' },
        { value: '50+', label: 'Products Developed' },
        { value: '10+', label: 'Market Partners' },
    ],
    features: [
        { icon: Palette, title: 'Weaving & Loom Training', description: 'Traditional techniques with modern efficiency' },
        { icon: Sparkles, title: 'Natural Dyeing', description: 'Eco-friendly colors from natural sources' },
        { icon: BookOpen, title: 'Pattern Design', description: 'Contemporary designs meeting traditional craftsmanship' },
        { icon: ShoppingBag, title: 'E-commerce Training', description: 'Selling products on digital platforms' },
        { icon: Users, title: 'Cooperative Building', description: 'Forming self-help groups and cooperatives' },
        { icon: Target, title: 'Fair Trade Practices', description: 'Ensuring fair wages and ethical practices' },
    ],
};

export default function HemaPage() {
    return (
        <main className="min-h-screen pt-24">
            {/* Hero */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <Link href="/projects" className="inline-flex items-center gap-2 text-text-muted hover:text-foreground transition-colors mb-8">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Projects
                        </Link>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
                            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6`}>
                                <HeartHandshake className="w-10 h-10 text-white" />
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold mb-4">{project.title}</h1>
                            <p className="text-pink text-xl font-medium mb-6">{project.subtitle}</p>
                            <p className="text-text-muted text-lg mb-8">{project.description}</p>
                            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                                Get Involved <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="glass-light rounded-3xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <Target className="w-5 h-5 text-pink" />
                                <span className="text-sm font-medium text-text-dim">Impact Metrics</span>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {project.stats.map((stat) => (
                                    <div key={stat.label} className="text-center p-4 rounded-2xl bg-surface/50">
                                        <div className={`text-3xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent mb-1`}>{stat.value}</div>
                                        <div className="text-sm text-text-dim">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-24 px-6 bg-surface/30">
                <div className="max-w-7xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Training Areas</h2>
                        <p className="text-text-muted max-w-2xl mx-auto">Comprehensive skills for artisan empowerment.</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {project.features.map((feature, index) => (
                            <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="glass-light rounded-2xl p-6">
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-4`}>
                                    <feature.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                                <p className="text-text-muted text-sm">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`max-w-4xl mx-auto text-center rounded-3xl p-12 bg-gradient-to-br ${project.gradient}`}>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Support Women Artisans</h2>
                    <p className="text-white/90 mb-8 max-w-xl mx-auto">Help preserve traditional crafts while empowering rural women.</p>
                    <Link href="/contact" className="px-8 py-4 bg-white text-pink font-bold rounded-xl hover:bg-white/90 transition-colors inline-block">Contact Us</Link>
                </motion.div>
            </section>
        </main>
    );
}
