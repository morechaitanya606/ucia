'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
    Leaf,
    ArrowLeft,
    ArrowRight,
    Target,
    Zap,
    Recycle,
    FileCheck,
    TrendingUp,
    Award
} from 'lucide-react';

const project = {
    title: 'Environmental Auditing',
    subtitle: 'Driving Green Excellence and Sustainable Compliance',
    description: 'Sustainability services for businesses and institutions including energy audits, zero-waste strategies, and ESG compliance consulting.',
    gradient: 'from-emerald to-cyan',
    stats: [
        { value: '200+', label: 'Organizations Audited' },
        { value: '30%', label: 'Average Energy Savings' },
        { value: '50+', label: 'Zero-Waste Plans' },
        { value: '15+', label: 'CSR Partnerships' },
    ],
    features: [
        { icon: Zap, title: 'Energy Audits', description: 'Comprehensive analysis of energy consumption patterns' },
        { icon: Recycle, title: 'Zero-Waste Strategy', description: 'Designing waste elimination and recycling systems' },
        { icon: FileCheck, title: 'ESG Compliance', description: 'Environmental, Social, and Governance reporting' },
        { icon: TrendingUp, title: 'Sustainability Roadmaps', description: 'Long-term plans for environmental goals' },
        { icon: Award, title: 'Certification Support', description: 'Guidance for green certifications and standards' },
        { icon: Target, title: 'Carbon Footprint Analysis', description: 'Measuring and reducing carbon emissions' },
    ],
};

export default function AuditPage() {
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
                                <Leaf className="w-10 h-10 text-white" />
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold mb-4">{project.title}</h1>
                            <p className="text-emerald text-xl font-medium mb-6">{project.subtitle}</p>
                            <p className="text-text-muted text-lg mb-8">{project.description}</p>
                            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                                Request Audit <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="glass-light rounded-3xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <Target className="w-5 h-5 text-emerald" />
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
                        <h2 className="text-4xl font-bold mb-4">Our Services</h2>
                        <p className="text-text-muted max-w-2xl mx-auto">Comprehensive environmental consulting for sustainable business.</p>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Go Green Today</h2>
                    <p className="text-white/90 mb-8 max-w-xl mx-auto">Partner with us for sustainable business practices.</p>
                    <Link href="/contact" className="px-8 py-4 bg-white text-emerald font-bold rounded-xl hover:bg-white/90 transition-colors inline-block">Contact Us</Link>
                </motion.div>
            </section>
        </main>
    );
}
