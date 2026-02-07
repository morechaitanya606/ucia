'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
    Cpu,
    CheckCircle2,
    ArrowLeft,
    ArrowRight,
    Target,
    Users,
    BookOpen,
    Laptop,
    Leaf,
    Palette
} from 'lucide-react';

const project = {
    title: 'Project RUDRA',
    subtitle: 'Rural & Urban Development through Resilience and Action',
    description: 'Our flagship initiative designed to transform rural and urban communities by providing comprehensive training and development programs. We focus on equipping youth and women with cutting-edge skills while preserving traditional knowledge.',
    gradient: 'from-violet to-pink',
    stats: [
        { value: '500+', label: 'Trained Individuals' },
        { value: '25+', label: 'Villages Covered' },
        { value: '80%', label: 'Employment Rate' },
        { value: '15+', label: 'Partners' },
    ],
    features: [
        { icon: Laptop, title: 'AI & Technology Training', description: 'Cutting-edge skills in AI, data analysis, and digital tools' },
        { icon: Leaf, title: 'GIS for Smart Farming', description: 'Geographic information systems for agricultural optimization' },
        { icon: BookOpen, title: 'Sustainable Agriculture', description: 'Modern and traditional farming techniques combined' },
        { icon: Palette, title: 'Traditional Arts & Crafts', description: 'Preserving heritage through skill development' },
        { icon: Users, title: 'Community Development', description: 'Building self-reliant and connected communities' },
        { icon: Target, title: 'Entrepreneurship', description: 'Business skills and market linkages for local enterprises' },
    ],
    timeline: [
        { phase: 'Phase 1', title: 'Assessment & Planning', description: 'Village surveys, needs assessment, and curriculum design' },
        { phase: 'Phase 2', title: 'Training Delivery', description: 'Intensive skill-building workshops and hands-on learning' },
        { phase: 'Phase 3', title: 'Implementation', description: 'Project execution and real-world application' },
        { phase: 'Phase 4', title: 'Sustainability', description: 'Long-term support, mentorship, and market connections' },
    ],
};

export default function RudraPage() {
    return (
        <main className="min-h-screen pt-24">
            {/* Hero */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-2 text-text-muted hover:text-foreground transition-colors mb-8"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Projects
                        </Link>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6`}>
                                <Cpu className="w-10 h-10 text-white" />
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold mb-4">{project.title}</h1>
                            <p className="text-violet text-xl font-medium mb-6">{project.subtitle}</p>
                            <p className="text-text-muted text-lg mb-8">{project.description}</p>
                            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                                Get Involved
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="glass-light rounded-3xl p-8"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <Target className="w-5 h-5 text-violet" />
                                <span className="text-sm font-medium text-text-dim">Impact Metrics</span>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {project.stats.map((stat) => (
                                    <div key={stat.label} className="text-center p-4 rounded-2xl bg-surface/50">
                                        <div className={`text-3xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent mb-1`}>
                                            {stat.value}
                                        </div>
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
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-4">Focus Areas</h2>
                        <p className="text-text-muted max-w-2xl mx-auto">
                            Comprehensive training across multiple domains to create well-rounded, skilled individuals.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {project.features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-light rounded-2xl p-6"
                            >
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

            {/* Timeline */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-4">Program Structure</h2>
                        <p className="text-text-muted">Our structured approach ensures lasting impact.</p>
                    </motion.div>

                    <div className="space-y-6">
                        {project.timeline.map((item, index) => (
                            <motion.div
                                key={item.phase}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex gap-6 items-start"
                            >
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shrink-0`}>
                                    <CheckCircle2 className="w-6 h-6 text-white" />
                                </div>
                                <div className="glass-light rounded-xl p-6 flex-1">
                                    <div className="text-violet text-sm font-medium mb-1">{item.phase}</div>
                                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                                    <p className="text-text-muted text-sm">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`max-w-4xl mx-auto text-center rounded-3xl p-12 bg-gradient-to-br ${project.gradient}`}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Join Project RUDRA
                    </h2>
                    <p className="text-white/90 mb-8 max-w-xl mx-auto">
                        Be part of transforming communities through skill development and sustainable practices.
                    </p>
                    <Link
                        href="/contact"
                        className="px-8 py-4 bg-white text-violet font-bold rounded-xl hover:bg-white/90 transition-colors inline-block"
                    >
                        Contact Us
                    </Link>
                </motion.div>
            </section>
        </main>
    );
}
